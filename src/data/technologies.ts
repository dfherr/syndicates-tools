import { Technologies } from "../model/technology";

const TECHNOLOGIES: Technologies = {
	"Military Sciences": {
		"name": "Military Sciences",
		"levels": [{
				"technologyTree": "Military Sciences",
				"level": 0,
				"technologies": {
					"Basic Unit Construction": {
						"technologyTree": "Military Sciences",
						"level": 0,
						"name": "Basic Unit Construction",
						"abbreviation": "BUC",
						"description": "Ermöglicht je nach Fraktion den Bau von Stalkern (SL), Strike Fightern (BF), Firestorm (UIC), Patrioten (NEB) oder Carrier (NoF).",
						"duration": 4,
						"networth": 500,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 0,
								"name": "Basic Unit Construction",
								"rank": 0,
								"cost": 0
							}
						]
					}
				}
			}, {
				"technologyTree": "Military Sciences",
				"level": 1,
				"technologies": {
					"Flexible Military Halls": {
						"technologyTree": "Military Sciences",
						"level": 1,
						"name": "Flexible Military Halls",
						"abbreviation": "FMH",
						"description": "Lagerhallen und Hauptquartiere (nur BF) bieten Platz für 2 zusätzliche Spionageeinheiten pro Stufe.",
						"duration": 8,
						"networth": 1000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 1,
								"name": "Flexible Military Halls",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Military Sciences",
								"level": 1,
								"name": "Flexible Military Halls",
								"rank": 1,
								"cost": 30000
							}
						]
					},
					"Flexible Spy Halls": {
						"technologyTree": "Military Sciences",
						"level": 1,
						"name": "Flexible Spy Halls",
						"abbreviation": "FSH",
						"description": "Spionageeinrichtungen bieten Platz für 2 zusätzliche Militäreinheiten pro Stufe.",
						"duration": 8,
						"networth": 1000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 1,
								"name": "Flexible Spy Halls",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Military Sciences",
								"level": 1,
								"name": "Flexible Spy Halls",
								"rank": 1,
								"cost": 30000
							}
						]
					},
					"Propaganda": {
						"technologyTree": "Military Sciences",
						"level": 1,
						"name": "Propaganda",
						"abbreviation": "Propa",
						"description": "Diese Forschung erhöht die Menge des bei einem Angriff eroberten Landes pro Level um 5%.",
						"duration": 8,
						"networth": 1000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 1,
								"name": "Propaganda",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Military Sciences",
								"level": 1,
								"name": "Propaganda",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Military Sciences",
								"level": 1,
								"name": "Propaganda",
								"rank": 2,
								"cost": 80000
							}
						]
					}
				}
			}, {
				"technologyTree": "Military Sciences",
				"level": 2,
				"technologies": {
					"Combat Management": {
						"technologyTree": "Military Sciences",
						"level": 2,
						"name": "Combat Management",
						"abbreviation": "CM",
						"description": "Diese Forschung reduziert die Heimkehrzeit von Militäreinheiten um 1 Tick pro Forschungsstufe.",
						"duration": 12,
						"networth": 2000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 2,
								"name": "Combat Management",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Military Sciences",
								"level": 2,
								"name": "Combat Management",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Military Sciences",
								"level": 2,
								"name": "Combat Management",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Basic Defense Tactics": {
						"technologyTree": "Military Sciences",
						"level": 2,
						"name": "Basic Defense Tactics",
						"abbreviation": "BDT",
						"description": "Diese Forschung erhöht die Verteidigungsstärke pro Forschungsstufe um 5 %.",
						"duration": 12,
						"networth": 2000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 2,
								"name": "Basic Defense Tactics",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Military Sciences",
								"level": 2,
								"name": "Basic Defense Tactics",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Military Sciences",
								"level": 2,
								"name": "Basic Defense Tactics",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Basic Offense Tactics": {
						"technologyTree": "Military Sciences",
						"level": 2,
						"name": "Basic Offense Tactics",
						"abbreviation": "BOT",
						"description": "Diese Forschung erhöht die Angriffsstärke pro Forschungsstufe um 10 %.",
						"duration": 12,
						"networth": 2000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 2,
								"name": "Basic Offense Tactics",
								"rank": 0,
								"cost": 30000
							}, {
								"technologyTree": "Military Sciences",
								"level": 2,
								"name": "Basic Offense Tactics",
								"rank": 1,
								"cost": 90000
							}
						]
					}
				}
			}, {
				"technologyTree": "Military Sciences",
				"level": 3,
				"technologies": {
					"Syndicate Army Training": {
						"technologyTree": "Military Sciences",
						"level": 3,
						"name": "Syndicate Army Training",
						"abbreviation": "SAT",
						"description": "Die Syndikatsarmee unterstützt deinen Konzern im Kampf. Außerhalb eines Krieges mit 10 % je Forschungslevel, während eines Krieges mit 15 % je Forschungslevel. Die Prozentzahl bezieht sich auf die Gesamtzahl der am Kampf beteiligten Einheiten.",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 3,
								"name": "Syndicate Army Training",
								"rank": 0,
								"cost": 40000
							}, {
								"technologyTree": "Military Sciences",
								"level": 3,
								"name": "Syndicate Army Training",
								"rank": 1,
								"cost": 120000
							}, {
								"technologyTree": "Military Sciences",
								"level": 3,
								"name": "Syndicate Army Training",
								"rank": 2,
								"cost": 320000
							}
						]
					},
					"Improved Weapon Technology": {
						"technologyTree": "Military Sciences",
						"level": 3,
						"name": "Improved Weapon Technology",
						"abbreviation": "IWT",
						"description": "+10 % Angriffsbonus.",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 3,
								"name": "Improved Weapon Technology",
								"rank": 0,
								"cost": 40000
							}, {
								"technologyTree": "Military Sciences",
								"level": 3,
								"name": "Improved Weapon Technology",
								"rank": 1,
								"cost": 120000
							}, {
								"technologyTree": "Military Sciences",
								"level": 3,
								"name": "Improved Weapon Technology",
								"rank": 2,
								"cost": 320000
							}
						]
					},
					"Advanced Unit Construction": {
						"technologyTree": "Military Sciences",
						"level": 3,
						"name": "Advanced Unit Construction",
						"abbreviation": "AUC",
						"description": "Ermöglicht je nach Fraktion den Bau von Headhuntern (SL), Wartanks (BF), Robotic Walls (UIC), Phoenixen (NEB) oder Halos (NoF).",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 3,
								"name": "Advanced Unit Construction",
								"rank": 0,
								"cost": 160000
							}
						]
					},
					"Ranger & Marine Training": {
						"technologyTree": "Military Sciences",
						"level": 3,
						"name": "Ranger & Marine Training",
						"abbreviation": "RMT",
						"description": "Ranger erhalten je Stufe 4 AP und 2 VP zusätzlich. Marines erhalten je Stufe 2 AP und 4 VP zusätzlich.",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 3,
								"name": "Ranger & Marine Training",
								"rank": 0,
								"cost": 80000
							}, {
								"technologyTree": "Military Sciences",
								"level": 3,
								"name": "Ranger & Marine Training",
								"rank": 1,
								"cost": 240000
							}
						]
					}
				}
			}, {
				"technologyTree": "Military Sciences",
				"level": 4,
				"technologies": {
					"Better Stocks Protection": {
						"technologyTree": "Military Sciences",
						"level": 4,
						"name": "Better Stocks Protection",
						"abbreviation": "BSP",
						"description": "Senkt die benötigten Anleihen für Angriffs- und Spionageschutz von 16% auf 13%",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Better Stocks Protection",
								"rank": 0,
								"cost": 300000
							}
						]
					},
					"Harden Armor": {
						"technologyTree": "Military Sciences",
						"level": 4,
						"name": "Harden Armor",
						"abbreviation": "HA",
						"description": "-20 % Verluste bei Kampfhandlungen.",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Harden Armor",
								"rank": 0,
								"cost": 60000
							}, {
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Harden Armor",
								"rank": 1,
								"cost": 180000
							}, {
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Harden Armor",
								"rank": 2,
								"cost": 480000
							}
						]
					},
					"Orbital Defense System": {
						"technologyTree": "Military Sciences",
						"level": 4,
						"name": "Orbital Defense System",
						"abbreviation": "ODS",
						"description": "10% weniger Landverlust bei verlorenem Kampf, +5% Verteidigunspunkte",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Orbital Defense System",
								"rank": 0,
								"cost": 60000
							}, {
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Orbital Defense System",
								"rank": 1,
								"cost": 180000
							}, {
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Orbital Defense System",
								"rank": 2,
								"cost": 480000
							}
						]
					},
					"Defense Network": {
						"technologyTree": "Military Sciences",
						"level": 4,
						"name": "Defense Network",
						"abbreviation": "DN",
						"description": "Die Verteidigungsstärke steigt pro Forschungsstufe um 10 %.",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Defense Network",
								"rank": 0,
								"cost": 60000
							}, {
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Defense Network",
								"rank": 1,
								"cost": 180000
							}, {
								"technologyTree": "Military Sciences",
								"level": 4,
								"name": "Defense Network",
								"rank": 2,
								"cost": 480000
							}
						]
					}
				}
			}, {
				"technologyTree": "Military Sciences",
				"level": 5,
				"technologies": {
					"Hightech Unit Construction": {
						"technologyTree": "Military Sciences",
						"level": 5,
						"name": "Hightech Unit Construction",
						"abbreviation": "HUC",
						"description": "Level 1:Ermöglicht je nach Fraktion den Bau von HUC-Units oder HUC-Gebäuden. Stealth Bombern (SL), Titanen (BF), Sentinel (UIC), EMP Cannons (NEB). Im Fall von NoF wird das Gebäude Behemothfabrik freigeschaltet.\nLevel 2: +30% Verteidigungsbonus",
						"duration": 48,
						"networth": 16000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 5,
								"name": "Hightech Unit Construction",
								"rank": 0,
								"cost": 300000
							}, {
								"technologyTree": "Military Sciences",
								"level": 5,
								"name": "Hightech Unit Construction",
								"rank": 1,
								"cost": 900000
							}
						]
					},
					"Better Space Management": {
						"technologyTree": "Military Sciences",
						"level": 5,
						"name": "Better Space Management",
						"abbreviation": "BSM",
						"description": "Jede Lagerhalle bietet pro Forschungsstufe Platz für 5 zusätzliche Militäreinheiten. Außerdem bietet jedes Hauptquartier Platz für 4 zusätzliche Militäreinheiten (nur BF).",
						"duration": 48,
						"networth": 16000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 5,
								"name": "Better Space Management",
								"rank": 0,
								"cost": 160000
							}, {
								"technologyTree": "Military Sciences",
								"level": 5,
								"name": "Better Space Management",
								"rank": 1,
								"cost": 480000
							}, {
								"technologyTree": "Military Sciences",
								"level": 5,
								"name": "Better Space Management",
								"rank": 2,
								"cost": 1280000
							}
						]
					}
				}
			}, {
				"technologyTree": "Military Sciences",
				"level": 6,
				"technologies": {
					"Relentless Assault": {
						"technologyTree": "Military Sciences",
						"level": 6,
						"name": "Relentless Assault",
						"abbreviation": "RA",
						"description": "7h schnellere Heimkehrzeit, 1% AP-Bonus * Tage seit Rundenstart, Ermöglicht bis zu 20 Angriffe am Tag .",
						"duration": 60,
						"networth": 32000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 6,
								"name": "Relentless Assault",
								"rank": 0,
								"cost": 1000000
							}
						]
					},
					"Fog of War": {
						"technologyTree": "Military Sciences",
						"level": 6,
						"name": "Fog of War",
						"abbreviation": "FOW",
						"description": "25% Verteidigungsbonus, 10% weniger Landverlust bei verlorenen Angriffen, 20% weniger Einheitenverluste bei defensiven Kampfhandlungen. Der Angriffsschutz nach einem erfolgreichen Angriff (inkl. der gelben/roten Färbung des Konzerns) hält doppelt so lange.",
						"duration": 60,
						"networth": 32000,
						"ranks": [{
								"technologyTree": "Military Sciences",
								"level": 6,
								"name": "Fog of War",
								"rank": 0,
								"cost": 500000
							}
						]
					}
				}
			}
		]
	},
	"Industrial Sciences": {
		"name": "Industrial Sciences",
		"levels": [{
				"technologyTree": "Industrial Sciences",
				"level": 0,
				"technologies": {
					"Basic Trade Program": {
						"technologyTree": "Industrial Sciences",
						"level": 0,
						"name": "Basic Trade Program",
						"abbreviation": "BTP",
						"description": "Schaltet den Global Market frei.",
						"duration": 4,
						"networth": 500,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 0,
								"name": "Basic Trade Program",
								"rank": 0,
								"cost": 0
							}
						]
					}
				}
			}, {
				"technologyTree": "Industrial Sciences",
				"level": 1,
				"technologies": {
					"Ranger & Marine Upgrade": {
						"technologyTree": "Industrial Sciences",
						"level": 1,
						"name": "Ranger & Marine Upgrade",
						"abbreviation": "RMU",
						"description": "Ranger und Marines produzieren Ressourcen. Je Stufe: & : UIC & NEB: 0,6 Erz; BF & NoF: 3 Energie; SL: 0,2 FP.",
						"duration": 8,
						"networth": 1000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 1,
								"name": "Ranger & Marine Upgrade",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 1,
								"name": "Ranger & Marine Upgrade",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 1,
								"name": "Ranger & Marine Upgrade",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Improved Production Methods": {
						"technologyTree": "Industrial Sciences",
						"level": 1,
						"name": "Improved Production Methods",
						"abbreviation": "IPM",
						"description": "+5 % Produktionsbonus auf Energie, Erz und Forschungspunkte sowie 10 % Produktionsbonus auf Credits",
						"duration": 8,
						"networth": 1000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 1,
								"name": "Improved Production Methods",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 1,
								"name": "Improved Production Methods",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 1,
								"name": "Improved Production Methods",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Faster Ranger Development": {
						"technologyTree": "Industrial Sciences",
						"level": 1,
						"name": "Faster Ranger Development",
						"abbreviation": "FRD",
						"description": "Militärakademien wandeln Ranger und Marines 1h schneller zur BUC-Unit (je nach Fraktion: Carrier/Stalker/Firestorm/Strike Fighter/Patriot) um.",
						"duration": 8,
						"networth": 1000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 1,
								"name": "Faster Ranger Development",
								"rank": 0,
								"cost": 30000
							}
						]
					}
				}
			}, {
				"technologyTree": "Industrial Sciences",
				"level": 2,
				"technologies": {
					"Scientific Advances": {
						"technologyTree": "Industrial Sciences",
						"level": 2,
						"name": "Scientific Advances",
						"abbreviation": "SA",
						"description": "+10 % Forschungspunkteproduktion",
						"duration": 12,
						"networth": 2000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 2,
								"name": "Scientific Advances",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 2,
								"name": "Scientific Advances",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 2,
								"name": "Scientific Advances",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Advanced Power Management": {
						"technologyTree": "Industrial Sciences",
						"level": 2,
						"name": "Advanced Power Management",
						"abbreviation": "APM",
						"description": "+10 % Energieproduktion pro Forschungsstufe.",
						"duration": 12,
						"networth": 2000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 2,
								"name": "Advanced Power Management",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 2,
								"name": "Advanced Power Management",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 2,
								"name": "Advanced Power Management",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Better Ore Mining": {
						"technologyTree": "Industrial Sciences",
						"level": 2,
						"name": "Better Ore Mining",
						"abbreviation": "BOM",
						"description": "Diese Forschung erhöht die Produktion von (Syndikats-)Erzförderungsanlagen pro Forschungsstufe um 10 %.",
						"duration": 12,
						"networth": 2000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 2,
								"name": "Better Ore Mining",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 2,
								"name": "Better Ore Mining",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 2,
								"name": "Better Ore Mining",
								"rank": 2,
								"cost": 80000
							}
						]
					}
				}
			}, {
				"technologyTree": "Industrial Sciences",
				"level": 3,
				"technologies": {
					"Inner Syndicate Energy Saving Program": {
						"technologyTree": "Industrial Sciences",
						"level": 3,
						"name": "Inner Syndicate Energy Saving Program",
						"abbreviation": "ESP",
						"description": "(Syndikatsforschung) 25% weniger Energieverbrauch fürs Syndikat.",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 3,
								"name": "Inner Syndicate Energy Saving Program",
								"rank": 0,
								"cost": 160000
							}
						]
					},
					"Inner Syndicate Trade Program": {
						"technologyTree": "Industrial Sciences",
						"level": 3,
						"name": "Inner Syndicate Trade Program",
						"abbreviation": "Trade",
						"description": "(Syndikatsforschung) Jeder Ihrer Mitspieler im Syndikat erhält für jedes Gebäude, das er besitzt und für das der Synergiebonus gilt, 24 Credits (oder einen äquivalenten Wert einer anderen Ressource) pro Stunde und Forschungslevel. Der maximale Bonus beträgt 240 Cr. Das Wechseln der Produktion dauert solange wie das Errichten neuer Gebäude.",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 3,
								"name": "Inner Syndicate Trade Program",
								"rank": 0,
								"cost": 40000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 3,
								"name": "Inner Syndicate Trade Program",
								"rank": 1,
								"cost": 120000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 3,
								"name": "Inner Syndicate Trade Program",
								"rank": 2,
								"cost": 320000
							}
						]
					},
					"Automatic Land Acquisition": {
						"technologyTree": "Industrial Sciences",
						"level": 3,
						"name": "Automatic Land Acquisition",
						"abbreviation": "ALA",
						"description": "Sie bekommen pro Stunde drei Hektar Land.",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 3,
								"name": "Automatic Land Acquisition",
								"rank": 0,
								"cost": 160000
							}
						]
					},
					"Advanced Building Construction": {
						"technologyTree": "Industrial Sciences",
						"level": 3,
						"name": "Advanced Building Construction",
						"abbreviation": "ABC",
						"description": "Level 1: Ermöglicht den Bau von Syndikatshandelszentren (alle Fraktionen), Syndikatskraftwerken (BF/NoF), Syndikatserzförderanlagen (UIC/NEB) und Syndikatsforschungslaboren (SL).\nLevel 2: Militärakademien, Hauptquartiere (BF), Nanofabriken (UIC), Geheimdienstzentren (SL), Kommandozentralen (NoF) und Wirtschaftszentren (NEB) werden freigeschaltet",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 3,
								"name": "Advanced Building Construction",
								"rank": 0,
								"cost": 80000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 3,
								"name": "Advanced Building Construction",
								"rank": 1,
								"cost": 240000
							}
						]
					}
				}
			}, {
				"technologyTree": "Industrial Sciences",
				"level": 4,
				"technologies": {
					"Cheaper Land Purchase": {
						"technologyTree": "Industrial Sciences",
						"level": 4,
						"name": "Cheaper Land Purchase",
						"abbreviation": "CLP",
						"description": "Der Erwerb von Land wird pro Forschungsstufe um 10 % kostengünstiger. Der maximale Bonus beträgt 30 %.",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Cheaper Land Purchase",
								"rank": 0,
								"cost": 60000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Cheaper Land Purchase",
								"rank": 1,
								"cost": 180000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Cheaper Land Purchase",
								"rank": 2,
								"cost": 480000
							}
						]
					},
					"Inner Syndicate Improved Building Construction": {
						"technologyTree": "Industrial Sciences",
						"level": 4,
						"name": "Inner Syndicate Improved Building Construction",
						"abbreviation": "ISIBC",
						"description": "(Syndikatsforschung) Gebäude werden pro Forschungsstufe zwei Stunden schneller fertiggestellt und im Syndikat um 3% billiger (maximal 30%). Die Mindestbauzeit für Gebäude beträgt 3 Stunden, die Mindestkosten betragen 1 Credit.",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Inner Syndicate Improved Building Construction",
								"rank": 0,
								"cost": 60000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Inner Syndicate Improved Building Construction",
								"rank": 1,
								"cost": 180000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Inner Syndicate Improved Building Construction",
								"rank": 2,
								"cost": 480000
							}
						]
					},
					"Greater Land Purchase": {
						"technologyTree": "Industrial Sciences",
						"level": 4,
						"name": "Greater Land Purchase",
						"abbreviation": "GLP",
						"description": "Beim Erwerb von Land erhält man 20% der gekauften Menge an Land kostenlos dazu",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Greater Land Purchase",
								"rank": 0,
								"cost": 300000
							}
						]
					},
					"Investment Strategies": {
						"technologyTree": "Industrial Sciences",
						"level": 4,
						"name": "Investment Strategies",
						"abbreviation": "IS",
						"description": "Bis zu 10 Mio. Credits pro Forschungsstufe werden stündlich mit einem Zinssatz von 2,0 % verzinst. Bei höherem Level steigt der Zinssatz pro Level um 1 % pro Stufe auf einen Zinssatz von 5,0 % bei Level 4 (Partnerbonus + Invest3). Zusätzlich schaltet diese Forschung das Gebäude Bank frei.",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Investment Strategies",
								"rank": 0,
								"cost": 60000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Investment Strategies",
								"rank": 1,
								"cost": 180000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 4,
								"name": "Investment Strategies",
								"rank": 2,
								"cost": 480000
							}
						]
					}
				}
			}, {
				"technologyTree": "Industrial Sciences",
				"level": 5,
				"technologies": {
					"Cheaper Unit Construction": {
						"technologyTree": "Industrial Sciences",
						"level": 5,
						"name": "Cheaper Unit Construction",
						"abbreviation": "CUC",
						"description": "Die Kosten von Militäreinheiten werden pro Forschungsstufe um 20 % gesenkt. Die minimalen Kosten von 40 % können dabei nicht unterschritten werden.",
						"duration": 48,
						"networth": 16000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 5,
								"name": "Cheaper Unit Construction",
								"rank": 0,
								"cost": 300000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 5,
								"name": "Cheaper Unit Construction",
								"rank": 1,
								"cost": 900000
							}
						]
					},
					"Cheaper Spy Construction": {
						"technologyTree": "Industrial Sciences",
						"level": 5,
						"name": "Cheaper Spy Construction",
						"abbreviation": "CSC",
						"description": "Ermöglicht den Bau von Spionagefabriken.\nSpionagefabriken senken die Kosten für Spionageeinheiten um 1,5%, bzw. 3,0 % (je nach Forschungsstufe) je % bebautem Land (maximaler Bonus bei 10% Bebauung).\nZusätzlich senkt jedes Level die Kosten von Spionageeinheiten um 10% und die Bauzeit um 2 Ticks.",
						"duration": 48,
						"networth": 16000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 5,
								"name": "Cheaper Spy Construction",
								"rank": 0,
								"cost": 300000
							}, {
								"technologyTree": "Industrial Sciences",
								"level": 5,
								"name": "Cheaper Spy Construction",
								"rank": 1,
								"cost": 900000
							}
						]
					}
				}
			}, {
				"technologyTree": "Industrial Sciences",
				"level": 6,
				"technologies": {
					"Economic Domination": {
						"technologyTree": "Industrial Sciences",
						"level": 6,
						"name": "Economic Domination",
						"abbreviation": "EcoDom",
						"description": "+100 % Produktionsbonus auf alle Ressourcen.",
						"duration": 60,
						"networth": 32000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 6,
								"name": "Economic Domination",
								"rank": 0,
								"cost": 1000000
							}
						]
					},
					"Weapons Licensing": {
						"technologyTree": "Industrial Sciences",
						"level": 6,
						"name": "Weapons Licensing",
						"abbreviation": "WL",
						"description": "Ihre Militäreinheiten produzieren jeden Tick ihren NW -2 in CR.",
						"duration": 60,
						"networth": 32000,
						"ranks": [{
								"technologyTree": "Industrial Sciences",
								"level": 6,
								"name": "Weapons Licensing",
								"rank": 0,
								"cost": 1000000
							}
						]
					}
				}
			}
		]
	},
	"Intelligence Sciences": {
		"name": "Intelligence Sciences",
		"levels": [{
				"technologyTree": "Intelligence Sciences",
				"level": 0,
				"technologies": {
					"Basic Storage System": {
						"technologyTree": "Intelligence Sciences",
						"level": 0,
						"name": "Basic Storage System",
						"abbreviation": "BSS",
						"description": "Aktiviert das Lager und den Transfer von Rohstoffen zwischen den Mitgliedern des Syndikats. Diese Forschung kann nicht zerstört werden.",
						"duration": 4,
						"networth": 500,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 0,
								"name": "Basic Storage System",
								"rank": 0,
								"cost": 0
							}
						]
					}
				}
			}, {
				"technologyTree": "Intelligence Sciences",
				"level": 1,
				"technologies": {
					"Spy Web": {
						"technologyTree": "Intelligence Sciences",
						"level": 1,
						"name": "Spy Web",
						"abbreviation": "",
						"description": "Level 1: Bei erfolgreichen Spionageaktionen gegen ihren Konzern wird der Typ der Spionageaktion angezeigt. Level 2: Sie werden über den Auftraggeber benachrichtigt, Racherecht wird erteilt. Level 3: +20 % Verteidigung gegen Spionage.",
						"duration": 8,
						"networth": 1000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 1,
								"name": "Spy Web",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 1,
								"name": "Spy Web",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 1,
								"name": "Spy Web",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Stretch Time": {
						"technologyTree": "Intelligence Sciences",
						"level": 1,
						"name": "Stretch Time",
						"abbreviation": "ST",
						"description": "Es können je Level 10 zusätzliche Spionageaktionen gespeichert werden.",
						"duration": 8,
						"networth": 1000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 1,
								"name": "Stretch Time",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 1,
								"name": "Stretch Time",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 1,
								"name": "Stretch Time",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Einfuehrung des 36 Stunden Tags fuer uebermotivierte Wissenschaftler": {
						"technologyTree": "Intelligence Sciences",
						"level": 1,
						"name": "Einfuehrung des 36 Stunden Tags fuer uebermotivierte Wissenschaftler",
						"abbreviation": "36h Tag",
						"description": "(Syndikatsforschung) Je Level sinken die Kosten für Forschungen im Syndikat um 7,5% (max 75%).",
						"duration": 8,
						"networth": 1000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 1,
								"name": "Einfuehrung des 36 Stunden Tags fuer uebermotivierte Wissenschaftler",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 1,
								"name": "Einfuehrung des 36 Stunden Tags fuer uebermotivierte Wissenschaftler",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 1,
								"name": "Einfuehrung des 36 Stunden Tags fuer uebermotivierte Wissenschaftler",
								"rank": 2,
								"cost": 80000
							}
						]
					}
				}
			}, {
				"technologyTree": "Intelligence Sciences",
				"level": 2,
				"technologies": {
					"Improved Intelligence": {
						"technologyTree": "Intelligence Sciences",
						"level": 2,
						"name": "Improved Intelligence",
						"abbreviation": "II",
						"description": "Alle Spionageeinheiten erhalten +0,5 IP pro Stufe.",
						"duration": 12,
						"networth": 2000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 2,
								"name": "Improved Intelligence",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 2,
								"name": "Improved Intelligence",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 2,
								"name": "Improved Intelligence",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Spy Training": {
						"technologyTree": "Intelligence Sciences",
						"level": 2,
						"name": "Spy Training",
						"abbreviation": "",
						"description": "20 % weniger Einheitenverluste bei misslungenen Spionageaktionen.",
						"duration": 12,
						"networth": 2000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 2,
								"name": "Spy Training",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 2,
								"name": "Spy Training",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 2,
								"name": "Spy Training",
								"rank": 2,
								"cost": 80000
							}
						]
					},
					"Hacknet": {
						"technologyTree": "Intelligence Sciences",
						"level": 2,
						"name": "Hacknet",
						"abbreviation": "HN",
						"description": "10% Bonus auf alle Spionageaktionen",
						"duration": 12,
						"networth": 2000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 2,
								"name": "Hacknet",
								"rank": 0,
								"cost": 10000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 2,
								"name": "Hacknet",
								"rank": 1,
								"cost": 30000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 2,
								"name": "Hacknet",
								"rank": 2,
								"cost": 80000
							}
						]
					}
				}
			}, {
				"technologyTree": "Intelligence Sciences",
				"level": 3,
				"technologies": {
					"Methodical Development": {
						"technologyTree": "Intelligence Sciences",
						"level": 3,
						"name": "Methodical Development",
						"abbreviation": "MD",
						"description": "Ermöglicht den Einsatz von:\nStufe 1: aller Diebstahlaktionen\nStufe 2: Militäreinheiten zerstören, Gebäude zerstören\nStufe3: Ortung stören, Rückkehr verzögern, Forschung zerstören​",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 3,
								"name": "Methodical Development",
								"rank": 0,
								"cost": 40000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 3,
								"name": "Methodical Development",
								"rank": 1,
								"cost": 120000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 3,
								"name": "Methodical Development",
								"rank": 2,
								"cost": 320000
							}
						]
					},
					"Increased Dividend Distribution": {
						"technologyTree": "Intelligence Sciences",
						"level": 3,
						"name": "Increased Dividend Distribution",
						"abbreviation": "IDD",
						"description": "Erhöht die Dividendenausschüttung durch Syndikatsanleihen um 50%. (Gilt nicht für Anleihen des eigenen Syndikats)",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 3,
								"name": "Increased Dividend Distribution",
								"rank": 0,
								"cost": 160000
							}
						]
					},
					"Partner Lobbying": {
						"technologyTree": "Intelligence Sciences",
						"level": 3,
						"name": "Partner Lobbying",
						"abbreviation": "PL",
						"description": "Unabhängig von der Landgröße ist ein zusätzlicher Partnerschaftsbonus aus einer beliebigen Kategorie wählbar. Dadurch können aus einer Kategorie drei Partnerboni gewählt werden.",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 3,
								"name": "Partner Lobbying",
								"rank": 0,
								"cost": 160000
							}
						]
					},
					"Intelligence Training": {
						"technologyTree": "Intelligence Sciences",
						"level": 3,
						"name": "Intelligence Training",
						"abbreviation": "IT",
						"description": "Aufklärung kostet 1 Spionageaktion weniger pro Stufe (Spionage verbraucht mindestens 1 Spionageaktion)",
						"duration": 24,
						"networth": 4000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 3,
								"name": "Intelligence Training",
								"rank": 0,
								"cost": 80000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 3,
								"name": "Intelligence Training",
								"rank": 1,
								"cost": 240000
							}
						]
					}
				}
			}, {
				"technologyTree": "Intelligence Sciences",
				"level": 4,
				"technologies": {
					"Improved Warehousing": {
						"technologyTree": "Intelligence Sciences",
						"level": 4,
						"name": "Improved Warehousing",
						"abbreviation": "IW",
						"description": "Die Lagersteuern reduzieren sich für alle Ressourcen von 15 % auf 5 %.",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Improved Warehousing",
								"rank": 0,
								"cost": 300000
							}
						]
					},
					"Capacity Augmentation": {
						"technologyTree": "Intelligence Sciences",
						"level": 4,
						"name": "Capacity Augmentation",
						"abbreviation": "CA",
						"description": "Erhöht bei erfolgreichen Sabotageaktionen und Diebstählen das Maximalergebnis um 20 % pro Forschungsstufe. Dabei wird nicht die Tragekapazität der eigenen Spionageeinheiten erhöht, sondern der prozentuale Anteil dessen, was maximal sabotiert/gestohlen werden kann.",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Capacity Augmentation",
								"rank": 0,
								"cost": 60000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Capacity Augmentation",
								"rank": 1,
								"cost": 180000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Capacity Augmentation",
								"rank": 2,
								"cost": 480000
							}
						]
					},
					"Inner Syndicate Spy Defense Network": {
						"technologyTree": "Intelligence Sciences",
						"level": 4,
						"name": "Inner Syndicate Spy Defense Network",
						"abbreviation": "ISSDN",
						"description": "(Syndikatsforschung) Jeder Ihrer Mitspieler im Syndikat erhält +9% Bonus auf seine Spionageverteidigung gegen alle Sabotageaktionen pro Forschungslevel (max90%).\nFür den eigenen Konzern +1 Spionageeinheit pro Hektar",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Inner Syndicate Spy Defense Network",
								"rank": 0,
								"cost": 60000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Inner Syndicate Spy Defense Network",
								"rank": 1,
								"cost": 180000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Inner Syndicate Spy Defense Network",
								"rank": 2,
								"cost": 480000
							}
						]
					},
					"Improved Spylabs": {
						"technologyTree": "Intelligence Sciences",
						"level": 4,
						"name": "Improved Spylabs",
						"abbreviation": "ISL",
						"description": "Eine Spionageeinrichtung unterhält vier zusätzliche Spionageeinheiten.",
						"duration": 36,
						"networth": 8000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Improved Spylabs",
								"rank": 0,
								"cost": 60000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Improved Spylabs",
								"rank": 1,
								"cost": 180000
							}, {
								"technologyTree": "Intelligence Sciences",
								"level": 4,
								"name": "Improved Spylabs",
								"rank": 2,
								"cost": 480000
							}
						]
					}
				}
			}, {
				"technologyTree": "Intelligence Sciences",
				"level": 5,
				"technologies": {
					"Motivationsprogramm für deprimierte Wissenschaftler": {
						"technologyTree": "Intelligence Sciences",
						"level": 5,
						"name": "Motivationsprogramm für deprimierte Wissenschaftler",
						"abbreviation": "Moti",
						"description": "Sie forschen 25% schneller.",
						"duration": 48,
						"networth": 16000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 5,
								"name": "Motivationsprogramm für deprimierte Wissenschaftler",
								"rank": 0,
								"cost": 600000
							}
						]
					},
					"Continuous Training Program": {
						"technologyTree": "Intelligence Sciences",
						"level": 5,
						"name": "Continuous Training Program",
						"abbreviation": "CTP",
						"description": "Der Konzern erhält 12 Sabotagepunkte (oP), 18 Aufklärungspunkte (iP) und 18 Spionageverteidigungspunkte (dP) pro Hektar (ha). Spionageboni wie Hacknet verstärken diese Punkte wie bei normalen Spionageeinheiten. Entspricht 6 zusätzlichen Agents und 6 Guardians pro ha.",
						"duration": 48,
						"networth": 16000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 5,
								"name": "Continuous Training Program",
								"rank": 0,
								"cost": 600000
							}
						]
					}
				}
			}, {
				"technologyTree": "Intelligence Sciences",
				"level": 6,
				"technologies": {
					"Faster Spy Regeneration": {
						"technologyTree": "Intelligence Sciences",
						"level": 6,
						"name": "Faster Spy Regeneration",
						"abbreviation": "FSR",
						"description": "Sie bekommen zwei zusätzliche Spionageaktionen pro Stunde, 3.5 Credits Grundeinkommen je Spion aus Insiderhandel, 10% zusätzliche Ressourcen bei Diebstahlaktionen und können 10 Spionageaktionen zusätzlich speichern.",
						"duration": 60,
						"networth": 32000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 6,
								"name": "Faster Spy Regeneration",
								"rank": 0,
								"cost": 1000000
							}
						]
					},
					"Efficient Space Usage": {
						"technologyTree": "Intelligence Sciences",
						"level": 6,
						"name": "Efficient Space Usage",
						"abbreviation": "ESU",
						"description": "Du bekommst 1 zusätzliche Spionageaktionen pro Tick und du kannst 10 % mehr Gebäude auf deinem Land bauen.",
						"duration": 60,
						"networth": 32000,
						"ranks": [{
								"technologyTree": "Intelligence Sciences",
								"level": 6,
								"name": "Efficient Space Usage",
								"rank": 0,
								"cost": 1000000
							}
						]
					}
				}
			}
		]
	}
}

export {
    TECHNOLOGIES,
};