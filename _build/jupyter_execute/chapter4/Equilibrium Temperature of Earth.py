#!/usr/bin/env python
# coding: utf-8

# # Calculation of the Equilibrium Temperature of Earth

# ### Equation 4.3(b) in Dessler.

# In[1]:


S = 1360                  # W m-2
a = 0.3                   # unitless
Tequilibrium = (S*(1-a)/(4*5.67e-8))**(1/4)


# In[2]:


print('The Equilibrium Temperature of Earth is:', Tequilibrium, 'K')

