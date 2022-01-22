#!/usr/bin/env python
# coding: utf-8

# # ASHRAE Irradiance sample calculation

# In[1]:


get_ipython().run_line_magic('pylab', 'inline')


# ASHRAE provides a formula for calculating the irradiance at the surface on a plane that is perpendicular to the incoming solar radiation. This equation is:
# 
# $$ I_B = A e^{-Km} $$
# 
# where
# 
# $$ A = 1160 + 75 sin[360/365 (n - 275)] $$
# 
# $$ K = 0.174 + 0.035 sin[360/365 (n - 100)] $$
# 
# $$ m = 1/ sin(\beta) $$
# 
# $$ \beta = 90 - Latitude + Declination $$
# 
# $$ Declination = \delta = 23.45 sin[360/365 (n - 81) $$
# 
# and n is the day number (e.g., May 1 = 31 + 28 + 31 + 30 + 1 = 121).

# In[2]:


def declination(day):
    d = -23.44 * cos( (2.*pi) / 365.25 * (day + 10) )   # Approximate
    return d


# In[3]:


def A(n):
    return 1160. + 75.*sin(360/365*(n-275)*pi/180) # W m-2


# In[4]:


def K(n):
    return 0.174 +0.035*sin(360/365*(n-100)*pi/180) # unitless


# In[5]:


def m(latitude, declination):
    return 1. / sin((90. - latitude + declination)*pi/180)


# In[6]:


A(121)


# In[7]:


K(121)


# In[8]:


declination(121)


# In[9]:


m(46.73, declination(121))


# In[10]:


lat = 46.73
day = 121
dec = declination(day)
Ib = A(day) * exp(-K(day)*m(lat, dec))
print('The ASHRAE irradiance at the surface is %4.0f W m-2'% Ib)


# In[ ]:




