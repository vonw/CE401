#!/usr/bin/env python
# coding: utf-8

# # Exponential Growth

# ## Examples from *Introduction to Modern Climate Change* by Andrew Dessler

# In[1]:


import numpy as np


# ### Equation 10.1 and Table 10.1
# 
# $$ F = P (1 + rate/100)^n $$
# 
# where F is the future values, P is the initial value, rate is the percentage rate of increase (interest), and n is the number of years.

# In[2]:


P = 100
rate = 10
n = 101
F = P * (1 + rate/100)**n

print('Wow! That $100 investment really grew! It is $' + f'{F:.2f}' + ' after 101 years!')


# ### The Rule of 72

# To determine the doubling time, one can recognize that F/P is 2. So, then one can determine n if the rate is known.
# 
# $$ \frac{F}{P} = 2 = (1 + r)^n $$
# 
# where r is the fractional rate of increase (not the percentage)
# 
# Take the natural log of both sides of the equation.
# 
# $$ ln(2) = ln[(1 + r)^n] = n * ln(1 + r) $$
# 
# So, 
# 
# $$ n = \frac{ln(2)}{ln(1 + r)} $$
# 
# $$ n = \frac{ln(2)}{r} \frac{r}{ln(1 + r)} $$
# 
# If r is small (e.g., 8% = 0.08), then 
# 
# $$ \frac{r}{ln(1 + r)} = \frac{0.08}{ln(1 + 0.08)} = 1.03949 $$
# 
# and 
# 
# $$ n \approx \frac{0.72}{r} \approx \frac{72}{100 * r} $$
# 
# 
# 

# In[3]:


r = 0.08
np.log(2) * r / np.log(1 + r)


# So, if the rate of interest is constant at 7.2%, it will take 10 years to double your money.

# ## Discounting

# Discounting simply solves our original equation for P.
# 
# $$ P = \frac{F}{(1 + rate/100)^n} $$

# In[4]:


# How much would we need to invest to have $25,000 in 15 years at a 5% interest rate.
F = 25000
rate = 5
n = 15
P = F / (1 + rate/100)**n

print('We would need to invest $' + f'{P:.2f}')


# ### Example 10.1: What would you do?

# In[5]:


P = 1000
discountRate = 5
n = 1
F = P * (1 + discountRate/100)**n

print('The value of the money after 1 year AT A DISCOUNT RATE OF 5% is $' + f'{F:.2f}')


# In[6]:


F = 1100
discountRate = 15
n = 1
P = F / (1 + discountRate/100)**n

print('The value of the money after 1 year AT A DISCOUNT RATE OF 15% is $' + f'{P:.2f}')


# ### Cost-Benefit Analysis

# Imagine our choice is between spending 100 billion today or 1 trillion in 100 years. Compare these two using a discount rate of 3%.

# In[7]:


rate = 3
F = 1e12
n = 100
P = F / (1 + rate/100)**n

print('The value of the money after 100 years AT A DISCOUNT RATE OF 3% is $' + f'{P:.2f}')


# Note that this equals only 52 billion, so we would prefer to pay 1 trillion in 100 years than pay 100 billion today

# In[ ]:




