#!/usr/bin/env python
# coding: utf-8

# # Plot global temperature anomalies from Berkeley Earth

# <i>© Von P. Walden, Washington State University</i>

# First, download the following dataset from [Berkeley Earth](http://berkeleyearth.org):
# 
# [Land_and_Ocean_LatLong1.nc](http://berkeleyearth.lbl.gov/auto/Global/Gridded/Land_and_Ocean_LatLong1.nc)

# In[1]:


import xarray as xr
import hvplot.xarray


# In[2]:


import matplotlib.pyplot as plt
import cartopy.crs as ccrs


# In[3]:


be = xr.open_dataset('/Users/vonw/Downloads/Land_and_Ocean_LatLong1.nc')
be


# In[112]:


be.climatology[0:12]


# In[115]:


fig = plt.figure(figsize=(30,15))
ax = plt.axes(projection=ccrs.PlateCarree())
ax.coastlines()
be.climatology[0].plot(ax=ax)
plt.title('Climatology (1951-1980)');


# In[116]:


month = 6
year  = 1900
fig = plt.figure(figsize=(30,15))
ax = plt.axes(projection=ccrs.PlateCarree())
ax.coastlines()
(be.temperature[month+((year-1850)*12)]).plot(ax=ax, clim=[-10, 10])

