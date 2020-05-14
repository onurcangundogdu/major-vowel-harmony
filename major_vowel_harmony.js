const hardVowels = ['a', 'ı', 'o', 'u']
const softVowels = ['e', 'i', 'ö', 'ü']

const isHasMajorVowelHarmony = word => {
  let hasHardVowel, hasSoftVowel = false

  for(let i = 0; i < word.length; i++) {
    if (hardVowels.includes(word[i])) hasHardVowel = true 
    else if (softVowels.includes(word[i])) hasSoftVowel = true
  }

  return !(hasHardVowel && hasSoftVowel)
}

export default isHasMajorVowelHarmony;