Search.setIndex({"docnames": ["chapter1", "chapter1/FairbanksTemperatures", "chapter10", "chapter10/ExponentialGrowth_Dessler", "chapter2", "chapter2/LaurentideIceSheet_and_SeaLevel", "chapter2/plotBerkeleyEarth", "chapter3", "chapter3/BodiesEmittingInARoom", "chapter3/PlancksLaw", "chapter3/PowerEmittedByHuman", "chapter3/RadiationInSpectralBands", "chapter4", "chapter4/ASHRAE_Irradiance", "chapter4/EquilibriumTemperatureOfEarth", "chapter4/InfraredAbsorptionByTheAtmosphere", "chapter4/Insolation", "chapter4/SolarConstant", "homework", "intro"], "filenames": ["chapter1.md", "chapter1/FairbanksTemperatures.ipynb", "chapter10.md", "chapter10/ExponentialGrowth_Dessler.ipynb", "chapter2.md", "chapter2/LaurentideIceSheet_and_SeaLevel.ipynb", "chapter2/plotBerkeleyEarth.ipynb", "chapter3.md", "chapter3/BodiesEmittingInARoom.ipynb", "chapter3/PlancksLaw.ipynb", "chapter3/PowerEmittedByHuman.ipynb", "chapter3/RadiationInSpectralBands.ipynb", "chapter4.md", "chapter4/ASHRAE_Irradiance.ipynb", "chapter4/EquilibriumTemperatureOfEarth.ipynb", "chapter4/InfraredAbsorptionByTheAtmosphere.ipynb", "chapter4/Insolation.ipynb", "chapter4/SolarConstant.ipynb", "homework.md", "intro.md"], "titles": ["An Introduction to the Climate Problem", "Comparing temperature distributions", "Exponential Growth", "Exponential Growth", "Is the Climate Changing?", "Approximate the Decrease in Sea-level from the Laurentide Ice Sheet", "Plot global temperature anomalies from Berkeley Earth", "Radiation and Energy Balance", "Bodies Emitting in a Room", "Calculate Planck curves as a function of wavelength and temperature", "Calculate the Power Emitted by a Human", "Calculate Percentage of Radiation in Spectral Bands", "A Simple Climate Model", "ASHRAE Irradiance sample calculation", "Calculation of the Equilibrium Temperature of Earth", "Infrared Absorption by the Atmosphere", "Insolation", "Calculation of the Solar Constant", "Homework", "Computational Notebooks"], "terms": {"chapter": [0, 2, 4, 7], "1": [0, 1, 5, 6, 9, 11, 13, 14, 16], "includ": [0, 2, 4, 7], "follow": [0, 2, 4, 7, 15], "comput": [0, 2, 4, 7], "notebook": [0, 1, 2, 4, 5, 6, 7], "compar": 0, "two": [0, 3, 15], "temperatur": [0, 4, 12], "distribut": [0, 11], "fairbank": 0, "alaska": 0, "von": [1, 5, 6, 8, 9, 10, 11, 15, 16, 17, 19], "p": [1, 3, 5, 6, 8, 9, 10, 11, 15, 16, 17, 19], "walden": [1, 5, 6, 8, 9, 10, 11, 15, 16, 17, 19], "washington": [1, 5, 6, 8, 9, 10, 11, 15, 16, 17, 19], "state": [1, 5, 6, 8, 9, 10, 11, 15, 16, 17, 19], "univers": [1, 5, 6, 8, 9, 10, 11, 15, 16, 17, 19], "thi": [1, 3, 5, 6, 9, 13, 15, 16, 18], "differ": [1, 13, 15, 17], "slightli": 1, "mean": [1, 3, 6, 15, 16], "valu": [1, 3, 6, 11, 15], "The": [1, 6, 8, 9, 10, 13, 14, 16, 17], "idea": 1, "simul": 1, "figur": [1, 6, 7, 13, 15, 16], "dessler": [1, 19], "s": [1, 3, 6, 7, 8, 9, 11, 12, 14, 15, 16, 19], "book": [1, 19], "subtract": 1, "show": [1, 15], "where": [1, 3, 9, 13, 15, 16], "thei": [1, 3, 10], "most": [1, 6, 13, 15], "import": [1, 3, 6, 9, 11, 13, 15, 16, 17], "numpi": [1, 3, 9, 11, 13, 15, 16, 17], "np": [1, 3, 9, 11, 13, 15, 16, 17], "matplotlib": [1, 6, 9, 13, 15, 16], "pyplot": [1, 6, 13, 15, 16], "plt": [1, 6, 13, 15, 16], "from": [1, 4, 9, 13, 15], "scipi": [1, 6], "stat": 1, "norm": 1, "statist": 1, "These": [1, 15, 19], "roughli": 1, "introduct": [1, 19], "modern": [1, 19], "climat": [1, 19], "chang": [1, 15, 19], "x": [1, 15], "arang": [1, 9, 11, 13, 15, 16], "21": [1, 3, 6, 16], "43": [1, 3], "0": [1, 3, 6, 9, 11, 13, 14, 15, 16], "f1970": 1, "pdf": 1, "31": [1, 6, 13, 16], "2": [1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 16], "75": [1, 13], "f2010": 1, "33": [1, 6], "figsiz": [1, 6, 13, 15, 16], "12": [1, 6, 9, 13, 15, 16], "subplot": [1, 15], "211": 1, "plot": [1, 9, 13, 15, 16], "grid": [1, 6, 13, 15, 16], "true": [1, 6, 13, 15], "xlabel": [1, 6, 9, 13, 16], "c": [1, 6, 9, 11], "ylabel": [1, 6, 9, 13, 16], "frequenc": 1, "titl": [1, 6, 16], "august": 1, "legend": [1, 15, 16], "212": 1, "10": [2, 6, 9, 13, 15, 16], "f": [3, 5, 8, 9, 10, 15], "100": [3, 11, 13, 15, 16, 17], "n": [3, 13, 15], "futur": 3, "initi": 3, "percentag": 3, "increas": 3, "interest": 3, "number": [3, 13, 15, 16], "year": [3, 5, 13, 15, 16], "101": [3, 6], "print": [3, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 17], "wow": 3, "That": 3, "invest": 3, "realli": 3, "grew": 3, "It": [3, 15], "2f": [3, 15], "after": [3, 5], "1515867": 3, "36": [3, 6], "To": [3, 15], "doubl": [3, 15], "can": [3, 15], "recogn": [3, 15], "known": 3, "frac": [3, 15, 16], "r": [3, 6, 16], "fraction": [3, 15], "take": [3, 6, 15], "natur": 3, "log": 3, "both": [3, 15], "side": 3, "ln": [3, 15], "If": [3, 6, 15], "small": 3, "e": [3, 6, 8, 13, 15, 16, 17], "g": [3, 13], "8": [3, 6, 8, 9, 14, 15, 17], "08": 3, "03949": 3, "approx": 3, "7205174673600471": 3, "constant": [3, 12, 16], "7": [3, 8, 11, 15, 16], "your": 3, "monei": 3, "simpli": 3, "solv": [3, 15], "our": 3, "origin": 3, "todai": [3, 5, 15], "expens": 3, "present": 3, "process": 3, "calcul": [3, 12, 19], "refer": 3, "worth": 3, "more": [3, 19], "than": 3, "much": [3, 15], "need": [3, 6], "have": [3, 15], "25": [3, 9, 13, 16], "000": [3, 5], "15": [3, 8, 15, 16], "5": [3, 5, 6, 8, 9, 11, 13, 14, 15, 16, 17], "25000": 3, "now": [3, 5, 15], "call": [3, 6, 13], "becaus": [3, 15], "quantifi": 3, "which": [3, 15, 16], "lose": 3, "In": [3, 6, 13, 15], "other": [3, 15], "word": 3, "its": [3, 6, 15], "each": [3, 10, 11, 15], "12025": 3, "help": 3, "financi": 3, "decis": 3, "let": 3, "sai": 3, "re": [3, 15, 17], "bui": 3, "new": [3, 6], "given": [3, 10, 15, 16], "payment": 3, "option": [3, 15], "pai": 3, "1000": [3, 5, 15], "get": [3, 5, 6], "down": 3, "1100": 3, "best": 3, "No": [3, 6, 13], "dollar": 3, "But": [3, 15], "discountr": 3, "AT": 3, "A": [3, 6, 13], "OF": [3, 6], "1050": 3, "00": [3, 15], "least": 3, "amount": [3, 4, 17], "lowest": [3, 15], "therefor": [3, 15], "higher": 3, "956": 3, "52": [3, 5], "next": 3, "onli": [3, 6, 15, 16], "imagin": 3, "between": [3, 6, 11, 15, 16], "spend": 3, "billion": 3, "trillion": 3, "3": [3, 6, 7, 10, 11, 13, 15, 16], "1e12": 3, "52032839850": 3, "note": [3, 13, 15], "equal": [3, 11, 15, 16], "prefer": 3, "combin": 3, "judgement": 3, "consum": [3, 10], "rather": 3, "later": 3, "posit": 3, "good": [3, 15], "servic": 3, "ar": [3, 6, 15, 19], "fact": 3, "poor": 3, "peopl": 3, "doe": [3, 5, 15], "rich": 3, "pick": 3, "up": [3, 15], "bill": 3, "saw": [3, 15], "street": 3, "about": 3, "20": [3, 5, 6, 8, 9, 15, 16], "BUT": 3, "economist": 3, "argu": 3, "4": [3, 8, 9, 10, 11, 13, 16], "estim": [4, 5, 10], "sea": 4, "level": [4, 15], "rise": [4, 5], "gener": [4, 15], "melt": [4, 5], "laurentid": 4, "ic": 4, "sheet": 4, "view": [4, 6], "anomali": 4, "berkelei": 4, "earth": [4, 5, 12, 15, 16, 19], "project": [4, 6], "quick": 5, "how": [5, 6, 15, 19], "contain": [5, 15, 18], "ago": [5, 15], "mai": [5, 6, 13], "affect": 5, "time": [5, 15], "volum": [5, 15], "water": [5, 15], "surface_area_of_canada": 5, "10e6": 5, "km": [5, 13, 15, 16], "average_height_of_icesheet": 5, "750": 5, "volume_of_ic": 5, "assum": 5, "rho_ic": 5, "917": 5, "rho_wat": 5, "volume_of_wat": 5, "19083969": 5, "465648852": 5, "divid": 5, "surfac": [5, 13], "area": 5, "ocean": 5, "depth": 5, "requir": [5, 9], "creat": [5, 6, 15], "surface_area_of_ocean": 5, "361e6": 5, "sea_level_chang": 5, "due": 5, "9": [5, 8, 9, 10], "find": 5, "necessari": 5, "new_rho_of_ic": 5, "403": 5, "97045244690673": 5, "data": [6, 11, 15], "us": [6, 9, 15, 18], "land_and_ocean_latlong1": 6, "nc": 6, "cartopi": 6, "cr": 6, "ccr": 6, "panda": [6, 13, 15, 17], "pd": [6, 13, 15, 17], "xarrai": [6, 11], "xr": [6, 11], "you": 6, "run": 6, "download": 6, "larg": 6, "400": 6, "mb": [6, 15], "file": [6, 15], "click": 6, "link": 6, "edit": [6, 15], "code": [6, 15, 18], "cell": [6, 13], "below": [6, 15], "replac": 6, "pathnam": 6, "hard": 6, "drive": 6, "open_dataset": 6, "user": 6, "vonw": 6, "cours": [6, 19], "2021": 6, "2022": 6, "spring": 6, "ce401": [6, 15, 18, 19], "jupyterbook": 6, "keyerror": 6, "traceback": [6, 13], "recent": [6, 13], "last": [6, 13], "opt": 6, "hostedtoolcach": 6, "python": [6, 18], "16": [6, 13], "x64": 6, "lib": 6, "python3": 6, "site": 6, "packag": 6, "backend": 6, "file_manag": 6, "py": 6, "209": 6, "cachingfilemanag": 6, "_acquire_with_cache_info": 6, "self": 6, "needs_lock": 6, "208": 6, "try": [6, 15], "_cach": 6, "_kei": 6, "210": 6, "except": 6, "lru_cach": 6, "55": [6, 15], "lrucach": 6, "__getitem__": 6, "kei": 6, "54": 6, "_lock": 6, "56": 6, "move_to_end": 6, "function": [6, 12], "_open_scipy_netcdf": 6, "0x7f77ce581e50": 6, "home": 6, "runner": 6, "mmap": 6, "none": 6, "version": 6, "a1105723": 6, "cfe2": 6, "4807": 6, "8583": 6, "16c4c27f3218": 6, "dure": 6, "handl": 6, "abov": [6, 15], "anoth": [6, 13], "occur": [6, 16], "filenotfounderror": 6, "line": [6, 13, 15], "api": 6, "541": 6, "filename_or_obj": 6, "engin": [6, 19], "chunk": 6, "cach": 6, "decode_cf": 6, "mask_and_scal": 6, "decode_tim": 6, "decode_timedelta": 6, "use_cftim": 6, "concat_charact": 6, "decode_coord": 6, "drop_vari": 6, "inline_arrai": 6, "backend_kwarg": 6, "kwarg": 6, "529": 6, "decod": 6, "_resolve_decoders_kwarg": 6, "530": 6, "531": 6, "open_backend_dataset_paramet": 6, "open_dataset_paramet": 6, "537": 6, "538": 6, "540": 6, "overwrite_encoded_chunk": 6, "pop": 6, "backend_d": 6, "542": 6, "543": 6, "544": 6, "545": 6, "546": 6, "547": 6, "ds": 6, "_dataset_from_backend_dataset": 6, "548": 6, "549": 6, "557": 6, "558": 6, "559": 6, "return": [6, 13, 16], "scipy_": 6, "307": 6, "scipybackendentrypoint": 6, "mode": 6, "format": 6, "group": 6, "lock": 6, "305": 6, "store_entrypoint": 6, "storebackendentrypoint": 6, "306": 6, "close_on_error": 6, "store": 6, "308": 6, "309": 6, "310": 6, "311": 6, "312": 6, "313": 6, "314": 6, "315": 6, "316": 6, "317": 6, "32": [6, 8], "def": [6, 13, 16], "22": [6, 16], "30": [6, 9, 13, 16], "var": 6, "attr": 6, "load": 6, "encod": 6, "get_encod": 6, "35": 6, "coord_nam": 6, "convent": 6, "decode_cf_vari": 6, "37": [6, 8], "44": [6, 13, 15, 16], "45": [6, 13], "common": [6, 15], "128": 6, "abstractdatastor": 6, "106": 6, "107": 6, "108": 6, "variabl": [6, 15], "attribut": 6, "simultan": 6, "109": 6, "central": 6, "make": 6, "easier": [6, 15], "125": 6, "request": 6, "so": [6, 15, 16], "care": 6, "should": [6, 11], "taken": 6, "sure": 6, "fast": 6, "126": 6, "127": 6, "frozendict": 6, "_decode_variable_nam": 6, "k": [6, 8, 9, 11, 13, 14, 15, 16, 17], "v": 6, "get_vari": 6, "item": 6, "129": 6, "130": 6, "get_attr": 6, "131": 6, "174": [6, 13], "scipydatastor": 6, "172": 6, "173": 6, "open_store_vari": 6, "175": 6, "163": 6, "161": 6, "properti": [6, 15], "162": 6, "_manag": 6, "acquir": 6, "191": 6, "176": 6, "177": 6, "object": [6, 9, 11, 15], "manag": 6, "178": 6, "179": 6, "open": 6, "ha": 6, "expir": 6, "189": 6, "an": [6, 10, 11, 15, 16], "arg": 6, "190": 6, "_": 6, "192": 6, "215": 6, "213": 6, "copi": 6, "214": 6, "_mode": 6, "_open": 6, "_arg": 6, "216": 6, "w": [6, 8, 9, 10, 11, 13, 14, 16], "217": 6, "ensur": 6, "doesn": 6, "t": [6, 9, 15, 16], "overridden": 6, "when": 6, "again": [6, 15], "218": 6, "102": 6, "filenam": 6, "99": [6, 15], "io": 6, "bytesio": 6, "netcdf_fil": 6, "103": 6, "typeerror": 6, "netcdf3": 6, "messag": 6, "obscur": 6, "case": [6, 15], "104": 6, "errmsg": 6, "_netcdf": 6, "246": 6, "__init__": 6, "maskandscal": 6, "244": 6, "245": 6, "omod": 6, "els": [6, 15, 16], "fp": 6, "sb": 6, "247": 6, "248": 6, "pypi": 6, "cannot": 6, "usual": 6, "close": [6, 11, 19], "249": 6, "befor": [6, 13], "gc": 6, "better": 6, "fals": 6, "250": 6, "default": 6, "251": 6, "is_pypi": 6, "errno": 6, "directori": 6, "select": 6, "particular": 6, "jan": 6, "jul": 6, "feb": 6, "mar": 6, "apr": 6, "jun": 6, "aug": 6, "sep": [6, 15], "oct": 6, "nov": 6, "dec": [6, 13, 16], "fig": [6, 15], "ax": [6, 15], "platecarre": 6, "coastlin": 6, "index": [6, 13, 15], "1900": 6, "1850": 6, "clim": 6, "str": 6, "1990": 6, "depend": [6, 15], "mani": 6, "choos": 6, "analyz": 6, "could": 6, "ten": 6, "second": 6, "complet": 6, "beginning_year": 6, "ending_year": 6, "2010": [6, 15], "date_rang": [6, 13], "start": 6, "end": 6, "freq": [6, 13], "m": [6, 8, 9, 10, 11, 13, 14, 15, 16], "append": [6, 13, 16], "tanomali": 6, "dataarrai": [6, 11], "coord": [6, 11], "monthli": 6, "latitud": [6, 12, 13, 15, 16], "rang": [6, 16], "over": [6, 15], "beginning_latitud": 6, "ending_latitud": 6, "1950": 6, "2020": 6, "sel": [6, 11], "slice": [6, 11], "equatori": 6, "planck": [7, 11], "law": [7, 9, 15], "recreat": 7, "curv": 7, "emit": [7, 15], "variou": 7, "spectral": [7, 9], "band": [7, 15], "power": 7, "human": 7, "bodi": [7, 15], "room": 7, "67e": [8, 9, 14, 17], "troom": 8, "273": 8, "flux_room": 8, "approxim": [8, 13, 15, 16], "1f": [8, 9], "418": 8, "tbodi": 8, "flux_bodi": 8, "466": 8, "98": 8, "6": [8, 9, 11, 13, 15, 16, 17], "pylab": 9, "inlin": [9, 16], "deprec": 9, "librari": 9, "popul": 9, "interact": 9, "namespac": 9, "998e8": [9, 11], "h": [9, 11, 16], "626e": [9, 11], "34": [9, 11], "m2": [9, 11, 17], "kg": [9, 11, 15], "kb": [9, 11], "381e": [9, 11], "23": [9, 11, 13, 16, 17], "l": [9, 11], "1e": [9, 11], "meter": [9, 11, 15, 17], "300": [9, 11, 16], "b": [9, 11, 16], "exp": [9, 11, 13, 15], "um": [9, 11, 15], "spectralflux": [9, 11], "pi": [9, 11, 13, 16, 17], "micron": [9, 11], "flux": [9, 11], "text": [9, 16], "17": [9, 17], "l_max": 9, "max": 9, "75e": 9, "06": 9, "wien": 9, "give": [9, 15], "maximum": 9, "2989": 9, "stefan": 9, "boltzmann": 9, "total": [9, 11, 15], "0f": [9, 13, 16], "459": 9, "05": 9, "1600": 9, "120000": 9, "371589": 9, "01": [9, 11, 13], "6000": 9, "90e6": 9, "73483200": 9, "off": 10, "averag": [10, 17], "being": 10, "2000": [10, 15], "calori": 10, "food": 10, "dai": [10, 13, 16], "calories_per_dai": 10, "joules_per_calori": 10, "4184": 10, "seconds_per_dai": 10, "24": 10, "60": [10, 15], "power_per_human": 10, "96": 10, "5700": 11, "3300": 11, "50": [11, 16], "dl": 11, "convert": [11, 15, 16], "arrai": [11, 13, 16, 17], "wavelength": [11, 15], "1e6": [11, 15], "dim": 11, "sum": [11, 15], "vi": 11, "nir": 11, "ir": 11, "percent": [11, 15], "contribut": 11, "nearli": 11, "sigma": [11, 15], "p_uv": 11, "p_vi": 11, "p_nir": 11, "p_ir": 11, "all": [11, 15, 16], "034502797207032025": 11, "11": 11, "862449236428064": 11, "83": 11, "81426836992065": 11, "327490415712202": 11, "03871081926796": 11, "solar": 12, "insol": [12, 13], "longitud": 12, "infrar": 12, "absorpt": 12, "atmospher": 12, "equilibrium": [12, 15], "hvplot": 13, "modulenotfounderror": 13, "modul": 13, "name": [13, 15], "provid": [13, 19], "formula": [13, 15], "plane": 13, "perpendicular": 13, "incom": 13, "equat": [13, 15], "i_b": 13, "1160": 13, "sin": [13, 16], "360": [13, 16], "275": 13, "365": [13, 16], "035": 13, "beta": [13, 15], "90": [13, 16], "declin": [13, 16], "delta": [13, 16], "81": 13, "28": [13, 16], "121": 13, "attenu": 13, "per": 13, "air": 13, "mass": [13, 15], "d": [13, 16], "co": [13, 15, 16], "180": [13, 16], "unitless": [13, 14, 17], "366": [13, 16], "1124": 13, "6630369244601": 13, "186378664276173": 13, "14": [13, 15], "788451200638994": 13, "46": [13, 16], "73": 13, "1784278038586675": 13, "lat": [13, 16], "ib": 13, "903": 13, "date": 13, "2023": [13, 15], "int": 13, "strftime": 13, "j": [13, 15], "df": 13, "datafram": [13, 17], "axessubplot": 13, "THAT": 13, "alwai": 13, "sunlight": 13, "quit": 13, "toa": 13, "we": [13, 15], "see": [13, 15], "exampl": 13, "1360": 14, "tequilibrium": 14, "254": 14, "53556605545324": 14, "must": [15, 16], "relat": [15, 16, 19], "radiat": 15, "media": 15, "absorb": 15, "liquid": 15, "beer": 15, "i": 15, "lambda": 15, "i_o": 15, "tau": 15, "rewritten": 15, "Then": 15, "one": [15, 16], "big": 15, "int_": 15, "z_1": 15, "z_2": 15, "beta_": 15, "dz": 15, "kappa_": 15, "rho": 15, "z": 15, "sigma_": 15, "coeffici": 15, "kappa": 15, "cross": 15, "section": [15, 18], "distanc": [15, 16], "along": 15, "path": 15, "conduct": 15, "experi": 15, "lab": 15, "tube": 15, "fill": 15, "like": 15, "h2o": 15, "reduc": 15, "scientist": 15, "determin": 15, "gase": 15, "measur": 15, "either": 15, "molecul": 15, "height": 15, "carbon": 15, "dioxid": 15, "uniformli": 15, "mix": 15, "rel": 15, "howev": 15, "actual": [15, 16], "decreas": 15, "exponenti": 15, "manner": 15, "vapor": 15, "tropospher": 15, "integr": 15, "here": 15, "chosen": [15, 17], "specif": 15, "pierrehumbert": 15, "lucki": 15, "et": 15, "al": 15, "1972": 15, "third": 15, "seri": 15, "locat": 15, "season": 15, "tropic": 15, "trp": 15, "mid": 15, "summer": 15, "ml": 15, "winter": 15, "mlw": 15, "sub": 15, "arctic": 15, "sa": 15, "read": 15, "raw": 15, "column": 15, "layer": 15, "dew_point": 15, "o3": 15, "n2o": 15, "ch4": 15, "o2": 15, "read_tabl": 15, "dat": 15, "rair": 15, "287": 15, "058": 15, "renam": 15, "numberdens": 15, "airdens": 15, "interpol": 15, "everi": 15, "reindex": 15, "60001": 15, "method": 15, "linear": 15, "stdatm_nam": 15, "model": 15, "singl": 15, "quotat": 15, "mark": 15, "stdatm": 15, "elif": [15, 16], "error": 15, "NOT": 15, "330": 15, "1971": 15, "419": 15, "current": 15, "280": 15, "pre": 15, "industri": 15, "560": 15, "ax1": 15, "ax2": 15, "ax3": 15, "nrow": 15, "ncol": 15, "sharei": 15, "y": 15, "set_xlabel": 15, "set_ylabel": 15, "set_titl": 15, "profil": 15, "ozon": 15, "easi": 15, "individu": 15, "center": 15, "toward": 15, "window": 15, "type": 15, "wavenumb": 15, "cm": [15, 16], "mu": 15, "kappa_a": 15, "veri": 15, "strong": 15, "667": 15, "714": 15, "moder": 15, "769": 15, "13": 15, "weak": 15, "833": 15, "001": 15, "were": [15, 19], "physic": 15, "januari": [15, 16], "2011": 15, "multipli": 15, "thick": 15, "shown": 15, "disclaim": 15, "pleas": 15, "illustr": 15, "purpos": 15, "simplifi": 15, "wai": 15, "overlap": 15, "gh": 15, "blowup": 15, "600": [15, 16], "670": 15, "neglect": 15, "strength": 15, "http": [15, 16], "hitran": 15, "org": [15, 16], "doc": 15, "unit": 15, "width": 15, "accur": 15, "radi": 15, "transfer": 15, "account": 15, "issu": 15, "ka_15": 15, "ka_14": 15, "ka_13": 15, "ka_12": 15, "rhoco2": 15, "diff": 15, "differenc": 15, "od_15": 15, "od_14": 15, "od_13": 15, "od_12": 15, "logx": 15, "logi": 15, "t_15": 15, "t_14": 15, "t_13": 15, "t_12": 15, "axi": [15, 16], "120": 15, "do": 15, "There": 15, "togeth": 15, "t_": 15, "tau_1": 15, "tau_2": 15, "tau_3": 15, "Or": 15, "expon": 15, "just": 15, "add": 15, "ttotal_15": 15, "ttotal_14": 15, "ttotal_13": 15, "ttotal_12": 15, "result": 15, "59": 15, "41": 15, "thermal": 15, "kirchhoff": 15, "For": 15, "arbitrari": 15, "thermodynam": 15, "don": 15, "discuss": 15, "emitt": 15, "high": 15, "hold": 15, "well": 15, "also": 15, "a_15": 15, "a_14": 15, "a_13": 15, "a_12": 15, "q": 16, "s_o": 16, "d_m": 16, "theta_": 16, "dm": 16, "sun": 16, "theta": 16, "zenith": 16, "angl": 16, "circ": 16, "t_j": 16, "phi": 16, "hour": 16, "local": 16, "degre": 16, "rotat": 16, "convers": 16, "factor": 16, "length": 16, "semi": 16, "major": 16, "ellipt": 16, "orbit": 16, "149": [16, 17], "million": 16, "ani": 16, "closest": 16, "approach": 16, "perihelion": 16, "epsilon": 16, "eccentr": 16, "017": 16, "correct": 16, "q_": 16, "dayavg": 16, "h_o": 16, "tan": 16, "earth_sun_dist": 16, "6e6": 16, "solar_zenith_angl": 16, "declinationangl": 16, "radian": 16, "sza": 16, "arcco": 16, "qday_avg": 16, "1370": 16, "da": 16, "tmp": 16, "obtain": 16, "condit": 16, "en": 16, "wikipedia": 16, "wiki": 16, "ho": 16, "12600714770976626": 16, "148981817": 16, "36070523": 16, "456485702979": 16, "91": 16, "qn": 16, "reshap": 16, "181": 16, "cs": 16, "contourf": 16, "550": 16, "cmap": 16, "rdbu_r": 16, "contour": 16, "color": 16, "clabel": 16, "fmt": 16, "fontsiz": 16, "deg": 16, "mar20": 16, "jun21": 16, "sep20": 16, "dec21": 16, "355": 16, "annual": 16, "xtick": 16, "solstic": 16, "equinox": 16, "june": 16, "decemb": 16, "march": 16, "septemb": 16, "0x7f9973b40880": 16, "7298": 16, "lon": 16, "117": 16, "1817": 16, "tsun": 17, "5772": 17, "yield": 17, "62934436": 17, "58666411": 17, "rs": 17, "695": 17, "7e6": 17, "psun": 17, "watt": 17, "8277381380933445e": 17, "26": 17, "radiu": 17, "around": 17, "6e9": 17, "sphere": 17, "ae": 17, "0346073015646": 17, "4e6": 17, "aint": 17, "pe": 17, "constantli": 17, "7513743661383942e": 17, "175137": 17, "4366138394": 17, "albedo": 17, "238": 17, "1810562777738": 17, "340": 17, "25865182539115": 17, "sensr": 17, "147": 17, "1e9": 17, "152": 17, "iloc": 17, "471000e": 17, "719163e": 17, "1407": 17, "689949": 17, "427932": 17, "496000e": 17, "812374e": 17, "034607": 17, "000000": 17, "521000e": 17, "907156e": 17, "1316": 17, "660865": 17, "260295": 17, "5773": 17, "senstsun": 17, "827738e": 17, "831719e": 17, "449956": 17, "103883": 17, "assign": 18, "develop": 19, "part": 19, "scienc": 19, "some": 19, "associ": 19, "andrew": 19, "design": 19, "student": 19, "background": 19, "paramet": 19}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"an": [0, 13], "introduct": [0, 3], "climat": [0, 3, 4, 12], "problem": [0, 3], "compar": [1, 3], "temperatur": [1, 6, 8, 9, 11, 14, 15, 17], "distribut": [1, 6, 16], "gener": 1, "two": 1, "approxim": [1, 5], "those": 1, "measur": 1, "fairbank": 1, "ak": 1, "1970": 1, "2010": 1, "exponenti": [2, 3], "growth": [2, 3], "exampl": 3, "from": [3, 5, 6, 8, 16, 17], "modern": 3, "chang": [3, 4], "andrew": 3, "dessler": [3, 9, 14, 17], "equat": [3, 14, 16], "10": 3, "1": [3, 15, 17], "tabl": 3, "The": [3, 5, 15], "rule": 3, "72": 3, "discount": 3, "util": 3, "allow": 3, "one": 3, "cost": 3, "benefit": 3, "occur": 3, "differ": 3, "time": [3, 16], "what": 3, "would": [3, 5], "you": 3, "do": 3, "tv": 3, "choic": 3, "rate": 3, "make": 3, "profound": 3, "choos": [3, 15], "analysi": 3, "so": [3, 5, 8, 17], "how": [3, 17], "we": [3, 5, 8, 17], "determin": [3, 17], "correct": 3, "us": [3, 17], "huge": 3, "Is": 4, "decreas": 5, "sea": 5, "level": 5, "laurentid": 5, "ic": 5, "sheet": 5, "actual": [5, 6, 8], "valu": 5, "height": 5, "last": 5, "ag": 5, "wa": [5, 16], "about": [5, 17], "120": 5, "meter": 5, "where": 5, "might": 5, "have": 5, "underestim": 5, "our": [5, 8, 17], "calcul": [5, 6, 9, 10, 11, 13, 14, 15, 16, 17], "densiti": [5, 15], "had": 5, "much": [5, 17], "lower": 5, "400": 5, "kg": 5, "m": [5, 17], "3": [5, 9, 14, 17], "plot": 6, "global": [6, 16], "anomali": 6, "berkelei": 6, "earth": [6, 14, 17], "work": 6, "your": 6, "local": 6, "comput": [6, 19], "geograph": [6, 16], "1951": 6, "1980": 6, "climatolog": [6, 16], "given": [6, 11], "year": [6, 17], "month": 6, "annual": [6, 13], "longitudin": 6, "averag": [6, 16], "radiat": [7, 8, 11, 13], "energi": [7, 17], "balanc": 7, "bodi": 8, "emit": [8, 10, 11, 17], "room": 8, "stefan": [8, 17], "boltzmann": [8, 17], "constant": [8, 17], "wall": 8, "deg": 8, "c": 8, "includ": 8, "emiss": [8, 15], "0": [8, 17], "89": 8, "same": 8, "blackbodi": 8, "28": 8, "planck": 9, "curv": 9, "function": [9, 15, 16], "wavelength": 9, "figur": 9, "2a": 9, "2b": 9, "2c": 9, "power": [10, 17], "human": [10, 17], "percentag": 11, "spectral": 11, "band": 11, "For": 11, "t": 11, "proport": 11, "variou": 11, "uv": 11, "visibl": 11, "infrar": [11, 15], "A": 12, "simpl": 12, "model": 12, "ashra": 13, "irradi": 13, "sampl": 13, "now": [13, 17], "creat": 13, "cycl": [13, 17], "solar": [13, 16, 17], "equilibrium": 14, "4": [14, 17], "b": [14, 17], "absorpt": 15, "atmospher": [15, 16], "definit": 15, "optic": 15, "depth": 15, "mcclatchei": 15, "standard": 15, "2": [15, 17], "set": 15, "co2": 15, "concentr": 15, "ppmv": 15, "pressur": 15, "air": 15, "primari": 15, "greenhous": 15, "ga": 15, "transmiss": 15, "As": [15, 17], "altitud": 15, "through": 15, "entir": 15, "insol": 16, "top": 16, "toa": 16, "locat": 16, "flux": [16, 17], "per": 16, "unit": 16, "area": [16, 17], "hartmann": 16, "i": 16, "physic": 16, "radit": 16, "daili": 16, "over": [16, 17], "pullman": 16, "link": 17, "inform": 17, "s": 17, "orbit": 17, "sun": 17, "w": 17, "law": 17, "total": 17, "surfac": 17, "distanc": 17, "note": 17, "spread": 17, "veri": 17, "larg": 17, "space": 17, "intercept": 17, "rai": 17, "pass": 17, "convert": 17, "thi": 17, "terawatt": 17, "tw": 17, "1e12": 17, "explain": 17, "all": 17, "societi": 17, "current": 17, "consum": 17, "onli": 17, "16": 17, "need": 17, "captur": 17, "01": 17, "meet": 17, "equal": 17, "342": 17, "sensit": 17, "vari": 17, "dure": 17, "11": 17, "1361": 17, "1362": 17, "http": 17, "acrim": 17, "com": 17, "tsi": 17, "monitor": 17, "htm": 17, "homework": 18, "notebook": 19}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})