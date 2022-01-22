#!/usr/bin/env python
# coding: utf-8

# In[1]:


get_ipython().run_line_magic('pylab', 'inline')


# In[2]:


Tsun = 5779.   # Kelvin
Rsun = 696300. # km
Res = 149.6e6  # km (mean distance between the earth and sun)
Rearth = 6370. # km

So = (5.67e-8 * Tsun**4) * (4*pi*Rsun**2) / (4*pi*Res**2)
print(So,' W m-2')


# In[3]:


def earth_sun_distance(day):
    a     = 149.6e6                   # km
    e     = 0.017
    theta = day * ((2*pi) / 365.25)     # This is only an approximation.
    r = a*(1-e*e)/(1+e * cos(theta))
    return r


# In[4]:


def declination(day):
    d = -23.44 * cos( (2.*pi) / 365.25 * (day + 10) )   # Approximate
    return d


# In[5]:


def solar_zenith_angle(latitude,declinationAngle,hour):
    # All angles must be in radians !!
    latitude = latitude * (pi/180.)
    declinationAngle = declinationAngle * (pi/180.)
    h = 15. * (12. - hour) * (pi/180.)
    sza = arccos(sin(latitude)*sin(declinationAngle) + cos(latitude)*cos(declinationAngle)*cos(h))
    return sza


# In[6]:


day = 31 + 28 + 31 + 30 + 31 + 21


# In[7]:


day


# In[8]:


declination(day)


# In[9]:


So * cos(solar_zenith_angle(46.73, declination(day), 12.))


# In[ ]:




