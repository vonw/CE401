#!/usr/bin/env python
# coding: utf-8

# # Python code for Homework #2

# <i>© Von P. Walden, Washington State University</i>

# In[1]:


import numpy as np
import xarray as xr


# ---

# ## Useful code for problems 1, 2 and 3.

# In[2]:


# Temperature of the object
#T  = 5700.                                 # K
T  = 3300.                                 # K
#T  = 300.                                  # K

# Calculate the Planck radiation distribution between 0 and 50 microns
c  = 2.998e8                              # m s-1
h  = 6.626e-34                            # m2 kg s-1
kB = 1.381e-23                            # m2 kg s-2 K-1
dl = 0.01                                 # meters
l  = np.arange(dl,50,dl) * 1e-6           # meters
B  = np.pi * 2*h*c**2 / (l**5 * (np.exp((h*c) / (l *kB * T)) - 1.)) * 1e-6      # W m-2 um-1

# Convert B to an Xarray data array
B = xr.DataArray(B, coords={'wavelength': l*1e6}, dims=['wavelength'])

# Sum the radiation in uv, vis, nir and ir spectral bands:
#     UV            = 0   to 0.3 microns
#     visible       = 0.3 to 0.7 microns
#     near infrared = 0.7 to 4 microns
#     infrared      = 4   to 50 microns
uv  = B.sel(wavelength=slice(0,0.3)).sum()*dl
vis = B.sel(wavelength=slice(0.3,0.7)).sum()*dl
nir = B.sel(wavelength=slice(0.7,4)).sum()*dl
ir  = B.sel(wavelength=slice(4,50)).sum()*dl

# Calculate the percent contribution in each band
E     = B.sum()*dl                           # Total flux in W m-2; Should be nearly equal to sigma * T^4 !!
p_uv  = uv / E * 100
p_vis = vis / E * 100
p_nir = nir / E * 100
p_ir  = ir / E * 100

#%% Sum all the spectral bands; should be close to 100% !!
print('Percent UV:            ', p_uv.values)
print('Percent visible:       ', p_vis.values)
print('Percent near infrared: ', p_nir.values)
print('Percent infrared:      ', p_ir.values)

print('Total percent:         ', p_uv.values + p_vis.values + p_nir.values + p_ir.values)


# ---

# ## Useful code for problems 5 and 7.

# ### Useful links
# 
# #### [Information on the Solar "Constant"](https://en.wikipedia.org/wiki/Solar_cycle)
# 
# #### [Information on Earth's orbit](https://en.wikipedia.org/wiki/Earth%27s_orbit)

# ### Calculate the flux emitted by the Sun in W m-2 using the Stefan-Boltzmann Law.

# In[3]:


Tsun = 5772                     # K; chosen to yield S = 1361 W m-2
E    = 5.67e-8 * Tsun**4        # W m-2
print('The flux from the Sun is:',E, 'W m-2')


# ### Calculate the total power emitted by the Sun's surface.

# In[4]:


Rs   = 695.7e6                    # meters
As   = 4*np.pi*Rs**2                 # m2
Psun = E * As
print('Power emitted by the Sun is:', Psun, 'Watts')


# ### Determine the flux (in W m-2) from the Sun, but at the distance of the Earth's orbit. NOTE that the total power from the Sun is spread over a very large area (in space...)

# In[5]:


# Average radius of Earth's orbit around the Sun.
Res   = 149.6e9                    # meters
# Surface area of a sphere with radius equal to Re.
Aes   = 4*np.pi*Res**2                # m2
# Solar Constant
S     = Psun / Aes
print('The Solar Constant for Earth is:', S, 'W m-2')


# ### Calculate the power is intercepted by the Earth as the Sun's rays pass by it.

# In[6]:


Re   = 6.4e6                        # meters
Aint = np.pi*Re**2                     # Area intercepted by Earth in m2
Pe   = S * Aint
print('The amount of power (in Watts) that is constantly intercepted by Earth is:', Pe, 'Watts')


# In[ ]:




