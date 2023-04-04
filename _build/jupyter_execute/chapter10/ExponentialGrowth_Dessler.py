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

# ---

# ## Discounting

# Discounting simply solves our original equation for P.
# 
# $$ P = \frac{F}{(1 + rate/100)^n} $$
# 
# The value today of a future expense or benefit is known as the *present value*. The process of calculating the present value is referred to as *discounting*. *"Money today is worth more to you than money in the future."*

# ### The utility of discounting is that it allows one to compare costs and benefits that occur at different times.

# ---

# How much would we need to invest to have $25,000 in 15 years at a 5% interest rate.

# In[4]:


F = 25000
rate = 5
n = 15
P = F / (1 + rate/100)**n

print(f'We would need to invest ${P:.2f} now (at 5%) to have $25000 in 15 years.')
print()
print(f'${P:.2f} is the present value.')
print('This calculation is called discounting.')
print()
print('The rate of 5% is called the discount rate, because it quantifies the rate at which money loses value in the future.')
print('In other words, money loses 5% of its value each year.')


# ---

# ### Example 10.1: What would you do? The TV example!

# Discounting can be used to help make financial decisions.
# 
# Let's say you're buying a new TV and you're given two payment options:
# 
# 1. Pay $1000. now.
# 2. Get it with no money down and pay $1100. in 1 year.
# 
# Which option is best for you?

# In[5]:


# No discounting.
print('You pay $1000. now, so it costs you $1000. in today''s dollars.)


# But what is the present value of $1100. in one year.

# In[12]:


# Discount option at 5% in one year
P = 1000
discountRate = 5
n = 1
F = P * (1 + discountRate/100)**n

print('The value of the money after 1 year AT A DISCOUNT RATE OF 5% is $' + f'{F:.2f}')


# The option that costs you the least amount of money is the one with the lowest present value.
# 
# Therefore, you choose to pay $1000. now (because the present value of $1100. in one year from now, discounted at 5%, is $1050.)

# But what is the discount rate is higher, say 15%?

# In[13]:


F = 1100
discountRate = 15
n = 1
P = F / (1 + discountRate/100)**n

print('The value of the money after 1 year AT A DISCOUNT RATE OF 15% is $' + f'{P:.2f}')


# Now the option that costs you the least amount of money is the present value using the 15% discount rate.
# 
# Therefore, you choose to pay $1100. next because it will only cost you $956 in today''s dollars.

# ### The choice of discount rate makes a profound difference in what you choose to do.

# ---

# ### Cost-Benefit Analysis

# Imagine our choice is between spending 100 billion today or 1 trillion in 100 years. Compare these two using a discount rate of 3%.

# In[ ]:


rate = 3
F = 1e12
n = 100
P = F / (1 + rate/100)**n

print('The value of the money after 100 years AT A DISCOUNT RATE OF 3% is $' + f'{P:.2f}')


# Note that this equals only 52 billion, so we would prefer to pay 1 trillion in 100 years than pay 100 billion today

# ---

# ## So how do we determine the correct discount rate to use?

# The discount rate is a combination of two different judgements:
# 
# 1. *Time discounting*, which is the preference to consume now rather than later.
#   Positive time discounting means that goods and services now are worth more than they are later.
# 
# 1. *Growth discounting* is the fact that a dollar means more to poor people than it does to rich people.
#   Would you pick up a $1 bill if you saw it on the street? What about a $20 bill?

# The discount rate used in present-value calculations is determined by combining the time and growth discount rates. 
# 
# BUT economists argue about which rate to use: 1% to 4%.

# ### The choice of discount rate makes a huge difference in climate problems.
