# IV_PRJ_US_OIL

This project was made to show where the US has imported its oil from over the past 30 years, chosen because that is where the earliest data for imports by country is reported by the Energy Information Agency, [eia.gov](https://www.eia.gov/dnav/pet/pet_move_impcus_a2_nus_ep00_im0_mbbl_m.htm). I colored the bars of the graph, showing the larger oil exporting countries and their democracy score index, which is an index compiled by the Economist Intelligence Unit (EIU), a UK based private company that ranks the countries of the world by political institutions and freedom on a scale from 0-10, authoritarian regimes to full democracies. The EIU started publishing this data in 06, posting every 1-2 years, so I decided to only use the most recent data from 2021 as the coloring. 

I hope to show through this animated bar graph, the impact of geopolitical events had on US oil imports, and to show that a majority of the oil the US imports is from authoritarian regimes. Thankfully in the past couple of years, Canada has become the largest exporter of oil to the US, jumping to ~50% of our oil imports. 

Installation/steup - have index.html and data2.json (pruned) or data.json (all countries) in the same folder, and run the index.html code in a localhost.

Lessons learned - I mainly learned how to prune large sets of data, due to the US importing very small amounts of oil from many countries, and how to animate in d3 JS using the transition() function, which practically did the work for me (it works for both shapes and text, though no animation for the text changing).
