#!/usr/bin/env python
# coding: utf-8

# # Calculate Planck curves as a function of wavelength and temperature

# <i>© Von P. Walden, Washington State University</i>

# In[1]:


get_ipython().run_line_magic('pylab', 'inline')


# ## Dessler, Figure 3.2a

# In[2]:


c  = 2.998e8                              # m s-1
h  = 6.626e-34                            # m2 kg s-1
kB = 1.381e-23                            # m2 kg s-2 K-1
l  = np.arange(0.25,20,0.25) * 1e-6       # meters
T  = 300.                                 # K
B  = pi * 2*h*c**2 / (l**5 * (np.exp((h*c) / (l *kB * T)) - 1.)) * 1e-6      # W m-2 um-1


# In[3]:


plot(l/1e-6,B)
xlabel('Wavelength, microns');
ylabel('Flux, W m-2 um-1');
text(17.5,30,'300 K');


# In[4]:


print(f"Wiens Law gives wavelength of maximum flux at: {(2989/T):3.1f} um.")


# In[5]:


print(f"The Stefan-Boltzmann Law gives the total flux for this object as: {(5.67e-8*T**4):4.0f} W m-2.")


# ## Dessler, Figure 3.2b

# In[6]:


l  = np.arange(0.25,12,0.05) * 1e-6      # meters
T  = 1600.                               # K
B  = pi * 2*h*c**2 / (l**5 * (np.exp((h*c) / (l *kB * T)) - 1.)) * 1e-6      # W m-2 um-1


# In[7]:


plot(l/1e-6,B)
xlabel('Wavelength, microns');
ylabel('Flux, W m-2 um-1');
text(10,120000,'1600 K');


# In[8]:


print(f"Wiens law gives wavelength of maximum flux at: {(2989/T):3.1f} um.")


# In[9]:


print(f"The Stefan-Boltzmann Law gives the total flux for this object as: {(5.67e-8*T**4):4.0f} W m-2.")


# ## Dessler, Figure 3.2c

# In[10]:


l  = np.arange(0.01,3.5,0.01) * 1e-6      # meters
T  = 6000.                                # K
B  = pi * 2*h*c**2 / (l**5 * (np.exp((h*c) / (l *kB * T)) - 1.)) * 1e-6      # W m-2 um-1


# In[11]:


plot(l/1e-6,B)
xlabel('Wavelength, microns');
ylabel('Flux, W m-2 um-1');
text(2.8,90e6,'6000 K');


# In[12]:


print(f"Wiens law gives wavelength of maximum flux at: {(2989/T):3.1f} um.")


# In[13]:


print(f"The Stefan-Boltzmann Law gives the total flux for this object as: {(5.67e-8*T**4):4.0f} W m-2.")


# In[ ]:




