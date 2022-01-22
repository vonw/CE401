#!/usr/bin/env python
# coding: utf-8

# # Calculate the Power Emitted by a Human

# <i>© Von P. Walden, Washington State University</i>

# Estimate the power (in W) given off by an average human being if they consume 2000 calories of food each day.

# In[1]:


calories_per_day   = 2000
joules_per_calorie = 4184
seconds_per_day    = 24 * 60 * 60

power_per_human    = calories_per_day * joules_per_calorie / seconds_per_day


# In[2]:


print(f'The power emitted by an average human is {power_per_human:{4.3}} W m-2')


# In[ ]:




