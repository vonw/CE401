#!/usr/bin/env python
# coding: utf-8

# # Visualizing Global CO2 Emissions

# Derived from https://towardsdatascience.com/visualising-the-worlds-carbon-dioxide-emissions-with-python-e9149492e820
# 
# Data obtained from https://edgar.jrc.ec.europa.eu/gallery?release=v70ghg&substance=CO2_excl_short-cycle_org_C&sector=TOTALS

# ### Acknowledgments
# I acknowledge the source of the data with a reference to the [EDGARv6.0 website](https://edgar.jrc.ec.europa.eu/index.php/dataset_ghg60) to Crippa et al. (2021) and to the [DOI](https://data.jrc.ec.europa.eu/dataset/97a67d67-c62e-4826-b873-9d972c4f670b).
# 

# In[1]:


import numpy as np
import pandas as pd
import geopandas as gpd
from shapely.geometry import Point
import cartopy.crs as ccrs
import matplotlib.pyplot as plt


# In[2]:


co2 = pd.read_csv('/Users/vonw/work/courses/2022-2023/spring/CE401/jupyterbook/CE401/chapter5/v7/v7.0_FT2021_CO2_excl_short-cycle_org_C_2021_TOTALS.txt', delimiter=';', skiprows=2)
co2.head()


# In[3]:


# From https://towardsdatascience.com/visualising-the-worlds-carbon-dioxide-emissions-with-python-e9149492e820
geometry = [Point(xy) for xy in zip(co2['lon'], co2['lat'])]
geodata = gpd.GeoDataFrame(co2, crs="EPSG:4326", geometry=geometry)


# In[ ]:


# From https://towardsdatascience.com/visualising-the-worlds-carbon-dioxide-emissions-with-python-e9149492e820
from matplotlib import cm
from matplotlib.colors import ListedColormap
from matplotlib import colors

our_cmap = cm.get_cmap('afmhot', 11)
newcolors = our_cmap(np.linspace(0, 1, 11))
newcolors = newcolors[1:]

black = np.array([0.0, 0.0, 0.0, 1.0])
#newcolors[:1, :] = black
our_cmap = ListedColormap(newcolors)
bounds = [0.0, 0.06, 6, 60, 600, 3000, 6000, 24000, 45000, 120000]
norm = colors.BoundaryNorm(bounds, our_cmap.N)

gradient = np.linspace(0, 1, 10)
gradient = np.vstack((gradient, gradient))

fig, ax = plt.subplots(facecolor='black', subplot_kw={'projection': ccrs.Robinson()})
ax.patch.set_facecolor('black')

fig.set_size_inches(7, 3.5)
ax = geodata.plot(ax=ax, column='emission 2021 (tons)', transform=ccrs.PlateCarree(),
                  cmap=our_cmap, norm=norm, s=0.05, alpha=1, edgecolors='none')

plt.setp(ax.spines.values(), color='black')
plt.setp([ax.get_xticklines(), ax.get_yticklines()], color='black')
newax = fig.add_axes([0.82, 0.13, 0.08, 0.08], anchor='NE')
newax.imshow(logo)
newax.axis('off')
txt = ax.text(0.0, 0.02, "CO$_2$ Emissions \n@PythonMaps",
              size=4,
              color='white',
              transform = ax.transAxes)

ax.set_ylim(-8000000, 9000000)

fig = ax.get_figure()
cax = fig.add_axes([0.36, 0.16, 0.33, 0.01])
sm = plt.cm.ScalarMappable(cmap=our_cmap, norm=norm)
sm._A = []
cb = fig.colorbar(sm, cax=cax, orientation="horizontal", pad=0.2, format='%.1e',
                  ticks=[0.03, 3, 33, 330, 1800, 4500, 15000, 34500, 82500],
                  drawedges=True)
cb.outline.set_visible(False)
#cb.outline.set_linewidth(0.00001)
#cb.outline.set_color('white')
cb.ax.tick_params(labelsize=2, width=0.5, length=0.5, color='white')
cbytick_obj = plt.getp(cb.ax, 'xticklabels' ) #Set y tick label color
plt.setp(cbytick_obj, color='white')
cb.ax.set_xlabel('CO$_2$ Tons/Year', fontsize=4, color='white', labelpad=-16)
plt.show()


# In[ ]:




