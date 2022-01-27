#!/usr/bin/env python
# coding: utf-8

# # Calculation of the Solar Constant

# <i>© Von P. Walden, Washington State University</i>

# ## Useful links
# 
# ### [Information on the Solar "Constant"](https://en.wikipedia.org/wiki/Solar_cycle)
# 
# ### [Information on Earth's orbit](https://en.wikipedia.org/wiki/Earth%27s_orbit)

# In[1]:


import numpy as np
import pandas as pd


# ### a) Calculate the flux emitted by the Sun in W m-2 using the Stefan-Boltzmann Law.

# In[2]:


Tsun = 5772                     # K; chosen to yield S = 1361 W m-2
E    = 5.67e-8 * Tsun**4        # W m-2
print('The flux from the Sun is:',E, 'W m-2')


# ### b) Calculate the total power emitted by the Sun's surface.

# In[3]:


Rs   = 695.7e6                    # meters
As   = 4*np.pi*Rs**2                 # m2
Psun = E * As
print('Power emitted by the Sun is:', Psun, 'Watts')


# ### Now determine the flux (in W m-2) from the Sun, but at the distance of the Earth's orbit. NOTE that the total power from the Sun is spread over a very large area (in space...)

# In[4]:


# Average radius of Earth's orbit around the Sun.
Res   = 149.6e9                    # meters
# Surface area of a sphere with radius equal to Re.
Aes   = 4*np.pi*Res**2                # m2
# Solar Constant
S     = Psun / Aes
print('The Solar Constant for Earth is:', S, 'W m-2')


# ---

# ### Now how much power is intercepted by the Earth as the Sun's rays pass by it.

# In[5]:


Re   = 6.4e6                        # meters
Aint = np.pi*Re**2                     # Area intercepted by Earth in m2
Pe   = S * Aint
print('The amount of power (in Watts) that is constantly intercepted by Earth is:', Pe, 'Watts')


# ### Convert this to Terawatts (TW); 1 TW = 1e12 W

# In[6]:


print('The amount of power (in TW) that is constantly intercepted by Earth is:', Pe/1e12, 'TW')


# ## As Dessler explains, all of human society currently consumes only 16 TW. So we only need to capture 0.01% of the Sun's power to meet all of our energy needs.

# ---

# In[7]:


a = 0.3                               # Earth's albedo; unitless
S*(1-a)/4


# ### Note that S/4 is equal to 342 W m-2.

# In[8]:


S/4


# ---

# ## Sensitivity to Earth-Sun Distance

# In[9]:


SensRes                   = pd.DataFrame({'Earth-Sun Distance': [147.1e9,149.6e9,152.1e9]})
SensRes['Area']           = 4 * np.pi * SensRes['Earth-Sun Distance']**2
SensRes['Solar Constant'] = Psun / SensRes['Area']
SensRes['% difference']   = (SensRes['Solar Constant'] - SensRes['Solar Constant'].iloc[1]) / SensRes['Solar Constant'].iloc[1] * 100
SensRes


# ---

# ## Sensitivity to Sun's surface temperature.

# #### Note that the solar constant varies by about 0.1% (1.3 W m-2) during the 11-year solar cycle, from about 1361 to 1362.3 W m-2. http://acrim.com/TSI%20Monitoring.htm

# In[10]:


Tsun = np.array([5772, 5773.5])   # K; chosen to yield S = 1361 W m-2
E    = 5.67e-8 * Tsun**4        # W m-2
Rs   = 695.7e6                  # meters
As   = 4*np.pi*Rs**2               # m2
Psun = E * As
# Average radius of Earth's orbit around the Sun.
Res   = 149.6e9                 # meters
# Surface area of a sphere with radius equal to Re.
Aes   = 4*np.pi*Res**2             # m2
# Solar Constant
S     = Psun / Aes

SensTsun = pd.DataFrame({'Temperature of Sun':   Tsun,
                         'Power Emitted by Sun': Psun,
                         'Solar Constant':       S,
                         '% difference': (S-S[0])/S[1]*100})
SensTsun[['Temperature of Sun', 'Power Emitted by Sun', 'Solar Constant', '% difference']]


# In[ ]:




