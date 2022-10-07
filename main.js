const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
const disordersArray = originalDisorderFormat.split('|$|')
const disordersDiv = disordersArray.join('</div>\n<div>')

console.log(`<div>${disordersDiv}</div>`)

