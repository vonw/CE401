#!/usr/bin/env python
# coding: utf-8

# # Comparing temperature distributions

# <i>© Von P. Walden, Washington State University</i>

# This notebook compares two histograms that differ slightly in their mean values. The idea is to simulate the two histograms in Figure 1.1 in Dessler's book, and to then subtract the histograms to show where they differ the most.

# In[1]:


import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


# ### Generate two distributions of temperatures that approximate those measured in Fairbanks, AK in the 1970s and 2010s.

# In[2]:


import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import statistics
  
# ....These distributions roughly approximate those in Figure 1.1 in Dessler's Introduction to Modern Climate Change
x = np.arange(21, 43, 0.1)
F1970s = norm.pdf(x, 31, 2.75)
F2010s = norm.pdf(x, 33, 2.75)


plt.figure(figsize=(12,12))
plt.subplot(211)
plt.plot(x, F1970s)
plt.plot(x, F2010s)
plt.grid(True)
plt.xlabel('Temperature (C)')
plt.ylabel('Frequency')
plt.title('Approximate Temperature Distributions for August in Fairbanks, AK')
plt.legend(['1970s', '2010s'])
plt.subplot(212)
plt.plot(x, F2010s-F1970s)
plt.xlabel('Temperature (C)')
plt.ylabel('Frequency')
plt.title('Difference of the two temperature distributions')
plt.grid(True)


# In[ ]:




