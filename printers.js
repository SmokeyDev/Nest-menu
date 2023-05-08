class Printers {
	constructor() {
		this.list = [
			{
				"name": "Postnet Trio Online",
				"menu": [
					{
						"title": "Raporty",
					},
					{
						"title": "Konfiguracja",
						"menu": [
							{
								"title": "Parametry ogólne",
							},
							{
								"title": "Konfiguracja połączeń",
								"menu": [
									{
										"title": "Usługi PC",
										"menu": [
											{
												"title": "Intefrejs PC",
												"menu": [
													{
														"title": "USB",
														"menu": [
															{
																"title": "Protokół Thermal",
																"menu": [
																	{
																		"title": "Windows 1250",
																	},
																	{
																		"title": "Latin2",
																	},
																	{
																		"title": "Mazowia",
																	},
																]
															},
															{
																"title": "Protokół Postnet",
																"menu": [
																	{
																		"title": "Windows 1250",
																	},
																	{
																		"title": "Latin2",
																	},
																	{
																		"title": "Mazowia",
																	},
																]
															},
														]
													},
													{
														"title": "COM",
														"menu": [
															{
																"title": "Protokół Thermal",
																"menu": [
																	{
																		"title": "Windows 1250",
																	},
																	{
																		"title": "Latin2",
																	},
																	{
																		"title": "Mazowia",
																	},
																]
															},
															{
																"title": "Protokół Postnet",
																"menu": [
																	{
																		"title": "Windows 1250",
																	},
																	{
																		"title": "Latin2",
																	},
																	{
																		"title": "Mazowia",
																	},
																]
															},
														]
													},
													{
														"title": "TCP / IP",
														"menu": [
															{
																"title": "Port",
																"value": "6666",
																"menu": [
																	{
																		"title": "Windows 1250",
																	},
																	{
																		"title": "Latin2",
																	},
																	{
																		"title": "Mazowia",
																	},
																]
															}
														]
													},
													{
														"title": "Bluetooth",
													},
												]
											},
											{
												"title": "Monitor",
											},
											{
												"title": "Odczyt pamięci chronionej",
											},
											{
												"title": "Tunelowanie COM",
											},
										]
									},
									{
										"title": "TCP / IP",
										"menu": [
											{
												"title": "Interfejs",
												"menu": [
													{
														"title": "USB",
													},
													{
														"title": "COM",
													},
													{
														"title": "Brak",
													},
													{
														"title": "USB (Net)",
													},
													{
														"title": "WiFi",
													},
													{
														"title": "Bluetooth",
													},
												]
											},
											{
												"title": "Adres IP",
												"menu": [
													{
														"title": "Adres IP",
														"value": "192.168.001.200"
													},
												]
											},
											{
												"title": "Maska podsieci",
												"menu": [
													{
														"title": "Maska podsieci",
														"value": "255.255.255.0"
													},
												]
											},
											{
												"title": "Brama",
												"menu": [
													{
														"title": "Brama",
														"value": "192.168.001.001"
													},
												]
											},
											{
												"title": "Preferowany DNS",
												"menu": [
													{
														"title": "DNS",
														"value": "008.008.008.008"
													},
												]
											},
											{
												"title": "Alternatywny DNS",
												"menu": [
													{
														"title": "DNS",
														"value": "008.008.004.004"
													},
												]
											},
											{
												"title": "DHCP",
												"menu": [
													{
														"title": "TAK",
													},
													{
														"title": "NIE",
													},
												]
											},
											{
												"title": "Zapisz",
											},
										]
									},
									{
										"title": "WiFi",
										"menu": [
											{
												"title": "Wyszukaj sieć",
												"menu": [
													{
														"title": "Wyszukanie sieci spowoduje chwilowe zerowanie aktualnego połączenia",
														"value": "TAK",
														"menu": [
															{
																"title": "Nazwa Twojej sieci WiFi",
																"menu": [
																	{
																		"title": "Połącz",
																	},
																]
															},
															{
																"title": "Dodaj sieć",
															},
														]
													},
												]
											},
											{
												"title": "Adres MAC",
											},
										]
									},
									{
										"title": "Bluetooth",
									},
									{
										"title": "Porty Komunikacyjne",
									},
								]
							},
							{
								"title": "Konfiguracja sprzętu",
							},
						]
					},
					{
						"title": "Pamięć chroniona",
					},
					{
						"title": "Serwis",
					},
				]
			},
			{
				"name": "Placeholder 1",
				"menu": [
					{
						"title": "Placeholder 1",
					},
				]
			},
			{
				"name": "Placeholder 2",
				"menu": [
					{
						"title": "Placeholder 2",
					},
				]
			},
		];
	}

	getList() {
		return this.list;
	}
}

export default Printers;