const deepCopyFunction = (inObject) => {
  let outObject, value, key

  if (typeof inObject !== "object" || inObject === null) {
    return inObject // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {}

  for (key in inObject) {
    value = inObject[key]

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value)
  }

  return outObject
}

let originalArray = [37, 3700, { hello: "world" }]
console.log("Original array:", ...originalArray) // 37 3700 Object { hello: "world" }

let shallowCopiedArray = originalArray.slice()
let deepCopiedArray = deepCopyFunction(originalArray)

originalArray[1] = 0 // Will affect the original only
console.log(`originalArray[1] = 0 // Will affect the original only`)
originalArray[2].hello = "moon" // Will affect the original and the shallow copy
console.log(`originalArray[2].hello = "moon" // Will affect the original array and the shallow copy`)

console.log("Original array:", ...originalArray) // 37 0 Object { hello: "moon" }
console.log("Shallow copy:", ...shallowCopiedArray) // 37 3700 Object { hello: "moon" }
console.log("Deep copy:", ...deepCopiedArray) // 37 3700 Object { hello: "world" }


/** Deep copy
 * If you do not use Dates, functions, undefined, Infinity, [NaN],
 * RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays,
 * Typed Arrays or other complex types within your object, a very
 * simple one liner to deep clone an object is: 
 * 
 * JSON.parse(JSON.stringify(object))
 */

 /* Here is an example of faulty deep copy with Date property */

 // Only some of these will work with JSON.parse() followed by JSON.stringify()
const sampleObject = {
  string: 'string',
  number: 123,
  boolean: false,
  null: null,
  notANumber: NaN, // NaN values will be lost (the value will be forced to 'null')
  date: new Date('1999-12-31T23:59:59'),  // Date will get stringified
  undefined: undefined,  // Undefined values will be completely lost, including the key containing the undefined value
  infinity: Infinity,  // Infinity will be lost (the value will be forced to 'null')
  regExp: /.*/, // RegExp will be lost (the value will be forced to an empty object {})
}

console.log(sampleObject) // Object { string: "string", number: 123, boolean: false, null: null, notANumber: NaN, date: Date Fri Dec 31 1999 23:59:59 GMT-0500 (Eastern Standard Time), undefined: undefined, infinity: Infinity, regExp: /.*/ }
console.log(typeof sampleObject.date) // object

const faultyClone = JSON.parse(JSON.stringify(sampleObject))

console.log(faultyClone) // Object { string: "string", number: 123, boolean: false, null: null, notANumber: null, date: "2000-01-01T04:59:59.000Z", infinity: null, regExp: {} }

// The date object has been stringified, the result of .toISOString()
console.log(typeof faultyClone.date) // string