#!/usr/bin/env python
# coding: utf-8

# # Calculate Percentage of Radiation in Spectral Bands

# <i>© Von P. Walden, Washington State University</i>

# In[1]:


import numpy as np
import xarray as xr


# ### For a given temperature T, calculate the proportion of radiation emitted in various spectral bands (UV, visible, near-infrared, and infrared).

# In[2]:


# Temperature of the object
#T  = 5700.                                 # K
T  = 3300.                                 # K
#T  = 300.                                  # K


# In[3]:


# Calculate the Planck radiation distribution between 0 and 50 microns
c  = 2.998e8                              # m s-1
h  = 6.626e-34                            # m2 kg s-1
kB = 1.381e-23                            # m2 kg s-2 K-1
dl = 0.01                                 # meters
l  = np.arange(dl,50,dl) * 1e-6           # meters
B  = 2*h*c**2 / (l**5 * (np.exp((h*c) / (l *kB * T)) - 1.)) * 1e-6      # W m-2 um-1
spectralFlux  = np.pi * B      # W m-2 um-1

# Convert spectralFlux to an Xarray data array
spectralFlux = xr.DataArray(spectralFlux, coords={'wavelength': l*1e6}, dims=['wavelength'])

# Sum the radiation in uv, vis, nir and ir spectral bands:
#     UV            = 0   to 0.3 microns
#     visible       = 0.3 to 0.7 microns
#     near infrared = 0.7 to 4 microns
#     infrared      = 4   to 50 microns
uv  = spectralFlux.sel(wavelength=slice(0,0.3)).sum()*dl
vis = spectralFlux.sel(wavelength=slice(0.3,0.7)).sum()*dl
nir = spectralFlux.sel(wavelength=slice(0.7,4)).sum()*dl
ir  = spectralFlux.sel(wavelength=slice(4,50)).sum()*dl

# Calculate the percent contribution in each band
Flux  = spectralFlux.sum()*dl                           # Total flux in W m-2; Should be nearly equal to sigma * T^4 !!
p_uv  = uv / Flux * 100
p_vis = vis / Flux * 100
p_nir = nir / Flux * 100
p_ir  = ir / Flux * 100


# In[4]:


#%% Sum all the spectral bands; should be close to 100% !!
print('Percent UV:            ', p_uv.values)
print('Percent visible:       ', p_vis.values)
print('Percent near infrared: ', p_nir.values)
print('Percent infrared:      ', p_ir.values)

print('Total percent:         ', p_uv.values + p_vis.values + p_nir.values + p_ir.values)

