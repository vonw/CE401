#!/usr/bin/env python
# coding: utf-8

# # Approximate the Decrease in Sea-level from the Laurentide Ice Sheet

# <i>© Von P. Walden, Washington State University</i>

# This notebook does a quick calculation of how much ice was contained in the Laurentide Ice Sheet about 20,000 years ago, and how that may have affected sea level at that time.

# In[1]:


# Approximate the volume of water in the Laurentide Ice Sheet
surface_area_of_Canada     = 10e6       # km^2
average_height_of_icesheet = 1.750      # km
volume_of_ice              = surface_area_of_Canada * average_height_of_icesheet

# Assume the density of ice in the Laurentide
rho_ice                    = 917        # kg m-3
rho_water                  = 1000       # kg m-3

volume_of_water            = volume_of_ice * (rho_water / rho_ice)


# In[2]:


print("The estimated volume of water in the Laurentide ice sheet is:", volume_of_water, "km^3")


# In[3]:


# Now divide by the surface area of oceans on earth to get the depth of water required to create the ice sheet.
surface_area_of_oceans     = 361e6        # km^2
sea_level_change           = volume_of_water / surface_area_of_oceans * 1000   # meters


# In[4]:


print(f'Decrease in sea level due to the Laurentide Ice Sheet: {sea_level_change:{5.3}} meters')


# ## The actual value at the height of the last ice age was actually about 120 meters.

# [Sea Level Rise, After the Ice Melted and Today](https://www.giss.nasa.gov/research/briefs/gornitz_09/)

# ### Where might we have underestimated our calculation? The density of ice !!

# So find the necessary density of ice to get 120 meters of sea level.

# In[5]:


new_rho_of_ice = volume_of_ice * (rho_water) / (surface_area_of_oceans * 120/1000)


# In[6]:


new_rho_of_ice


# ## So the density of ice would have had to be much lower; 400 kg/m^3.
