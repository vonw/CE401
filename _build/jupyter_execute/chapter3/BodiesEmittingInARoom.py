#!/usr/bin/env python
# coding: utf-8

# # Bodies Emitting in a Room

# <i>© Von P. Walden, Washington State University</i>

# ##### Stefan-Boltzmann constant

# In[1]:


s = 5.67e-8                     # W m-2 K-4


# ### Radiation from the walls of the room

# In[2]:


Troom = 20 + 273.15             # K
Flux_room = s * Troom**4            # W m-2

print(f"The room radiates approximately {Flux_room:5.1f} W m-2")


# ### Radiation from the bodies in the room

# In[3]:


Tbody = 28 + 273.15             # K
Flux_body = s * Tbody**4            # W m-2

print(f"Bodies radiate at approximately {Flux_body:5.1f} W m-2")


# ##### Actual Body Temperature (in deg C)

# In[4]:


(37 * 9/5) + 32


# ### Radiation from the bodies in the room (including emissivity)

# In[5]:


e     = 0.89
Tbody = 37 + 273.15             # K
Flux_body = e * s * Tbody**4            # W m-2

print(f"Bodies radiate at approximately {Flux_body:5.1f} W m-2")


# #### So if the emissivity of our bodies is 0.89 (or 89%), then we emit the same radiation as a blackbody at 28 C.
