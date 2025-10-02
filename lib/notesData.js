const notesData = {
  10: {
    subjects: {
      Maths: [
        { id: 'real-numbers', title: 'Chapter 1. Real Numbers' },
        { id: 'polynomials', title: 'Chapter 2. Polynomials' },
        { id: 'pair-of-linear-equations', title: 'Chapter 3. Pair of Linear Equations in Two Variables' },
        { id: 'quadratic-equations', title: 'Chapter 4. Quadratic Equations' },
        { id: 'arithmetic-progression', title: 'Chapter 5. Arithmetic Progression' },
        { id: 'triangles', title: 'Chapter 6. Triangles' },
        { id: 'coordinate-geometry', title: 'Chapter 7. Coordinate Geometry' },
        { id: 'introduction-to-trigonometry', title: 'Chapter 8. Introduction to Trigonometry' },
        { id: 'applications-of-trigonometry', title: 'Chapter 9. Some Applications of Trigonometry' },
        { id: 'circles', title: 'Chapter 10. Circles' },
        { id: 'area-related-to-circles', title: 'Chapter 11. Area Related to Circles' },
        { id: 'surface-areas-and-volumes', title: 'Chapter 12. Surface Areas and Volumes' },
        { id: 'statistics', title: 'Chapter 13. Statistics' },
        { id: 'probability', title: 'Chapter 14. Probability' }
      ],
      Science: [
        { id: 'chemical-reactions', title: 'Chapter 1. Chemical Reactions and Equations' },
        { id: 'acids-bases-salts', title: 'Chapter 2. Acids, Bases and Salts' },
        { id: 'metals-nonmetals', title: 'Chapter 3. Metals and Non-Metals' },
        { id: 'carbon-compounds', title: 'Chapter 4. Carbon and its Compounds' },
        { id: 'life-processes', title: 'Chapter 5. Life Processes' },
        { id: 'control-coordination', title: 'Chapter 6. Control and Coordination' },
        { id: 'reproduction', title: 'Chapter 7. How do Organisms Reproduce?' },
        { id: 'heredity-evolution', title: 'Chapter 8. Heredity and Evolution' },
        { id: 'light', title: 'Chapter 9. Light – Reflection and Refraction' },
        { id: 'human-eye', title: 'Chapter 10. Human Eye and Colourful World' },
        { id: 'electricity', title: 'Chapter 11. Electricity' },
        { id: 'magnetic-effects', title: 'Chapter 12. Magnetic Effects of Electric Current' },
        { id: 'environment', title: 'Chapter 13. Our Environment' }
      ],
      History: [
        { id: 'nationalism-europe', title: 'Chapter 1. The Rise of Nationalism in Europe' },
        { id: 'nationalism-india', title: 'Chapter 2. Nationalism in India' },
        { id: 'global-world', title: 'Chapter 3. The Making of a Global World' },
        { id: 'industrialisation', title: 'Chapter 4. The Age of Industrialisation' },
        { id: 'print-culture', title: 'Chapter 5. Print Culture and The Modern World' }
      ],
      Geography: [
        { id: 'resources-development', title: 'Chapter 1. Resources and Development' },
        { id: 'forest-wildlife', title: 'Chapter 2. Forest and Wildlife Resources' },
        { id: 'water-resources', title: 'Chapter 3. Water Resources' },
        { id: 'agriculture', title: 'Chapter 4. Agriculture' },
        { id: 'minerals-energy', title: 'Chapter 5. Minerals and Energy Resources' },
        { id: 'manufacturing-industries', title: 'Chapter 6. Manufacturing Industries' },
        { id: 'lifelines-economy', title: 'Chapter 7. Lifelines of National Economy' }
      ],
      Civics: [
        { id: 'power-sharing', title: 'Chapter 1. Power Sharing' },
        { id: 'federalism', title: 'Chapter 2. Federalism' },
        { id: 'gender-religion-caste', title: 'Chapter 3. Gender, Religion and Caste' },
        { id: 'political-parties', title: 'Chapter 4. Political Parties' },
        { id: 'outcomes-democracy', title: 'Chapter 5. Outcomes of Democracy' }
      ],
      Economics: [
        { id: 'development', title: 'Chapter 1. Development' },
        { id: 'indian-economy-sectors', title: 'Chapter 2. Sectors of the Indian Economy' },
        { id: 'money-credit', title: 'Chapter 3. Money and Credit' },
        { id: 'globalisation-indian-economy', title: 'Chapter 4. Globalisation and the Indian Economy' },
        { id: 'consumer-rights', title: 'Chapter 5. Consumer Rights' }
      ],
      Firstflight: [
        { id: 'a-letter-to-god', title: 'Chapter 1. A letter to god' },
        { id: 'nelson-mandela-long-walk-to-freedom', title: 'Chapter 2. Nelson Mandela: Long Walk to Freedom' },
        { id: 'two-stories-about-flying', title: 'Chapter 3. Two Stories about Flying' },
        { id: 'from-the-diary-of-anne-frank', title: 'Chapter 4. From the Diary of Anne Frank' },
        { id: 'glimpses-of-india', title: 'Chapter 5. Glimpses of India' },
        { id: 'mijbil-the-otter', title: 'Chapter 6. Mijbil the Otter' },
        { id: 'madam-rides-the-bus', title: 'Chapter 7. Madam Rides the Bus' },
        { id: 'the-sermon-at-benares', title: 'Chapter 8. The Sermon at Benares' },
        { id: 'the-proposal', title: 'Chapter 9. The Proposal' }
      ],
      Footprints: [
        { id: 'a-triumph-of-surgery', title: 'Chapter 1. A Triumph of sugery' },
        { id: 'the-thiefs-story', title: 'Chapter 2. The Thief\'s Story' },
        { id: 'the-midnight-visitor', title: 'Chapter 3. The Midnight Visitor' },
        { id: 'a-question-of-trust', title: 'Chapter 4. A Question of Trust' },
        { id: 'footprints-without-feet', title: 'Chapter 5. Footprints without Feet' },
        { id: 'the-making-of-a-scientist', title: 'Chapter 6. The Making of a Scientist' },
        { id: 'the-necklace', title: 'Chapter 7. The Necklace' },
        { id: 'bholi', title: 'Chapter 8. Bholi' },
        { id: 'the-book-that-saved-the-earth', title: 'Chapter 9. The Book That Saved the Earth' }
      ]
    }
  },
  9: {
    subjects: {
      Maths: [
        { id: 'number-systems', title: 'Chapter 1. Number Systems' },
        { id: 'polynomials', title: 'Chapter 2. Polynomials' },
        { id: 'coordinate-geometry', title: 'Chapter 3. Coordinate Geometry' },
        { id: 'linear-equations-in-two-variables', title: 'Chapter 4. Linear Equations in Two Variables' },
        { id: 'introduction-to-euclids-geometry', title: 'Chapter 5. Introduction to Euclid’s Geometry' },
        { id: 'lines-and-angles', title: 'Chapter 6. Lines and Angles' },
        { id: 'triangles', title: 'Chapter 7. Triangles' },
        { id: 'quadrilaterals', title: 'Chapter 8. Quadrilaterals' },
        { id: 'areas-of-parallelograms-and-triangles', title: 'Chapter 9. Areas of Parallelograms and Triangles' },
        { id: 'circles', title: 'Chapter 10. Circles' },
        { id: 'constructions', title: 'Chapter 11. Constructions' },
        { id: 'herons-formula', title: 'Chapter 12. Heron’s Formula' },
        { id: 'surface-areas-and-volumes', title: 'Chapter 13. Surface Areas and Volumes' },
        { id: 'statistics-and-probability', title: 'Chapter 14. Statistics and Probability' }
      ],
      Science: [
        { id: 'matter-in-our-surroundings', title: 'Chapter 1. Matter in Our Surroundings' },
        { id: 'is-matter-around-us-pure', title: 'Chapter 2. Is Matter Around Us Pure' },
        { id: 'atoms-and-molecules', title: 'Chapter 3. Atoms and Molecules' },
        { id: 'structure-of-the-atom', title: 'Chapter 4. Structure of the Atom' },
        { id: 'the-fundamental-unit-of-life', title: 'Chapter 5. The Fundamental Unit of Life' },
        { id: 'tissues', title: 'Chapter 6. Tissues' },
        { id: 'motion', title: 'Chapter 7. Motion' },
        { id: 'force-and-laws-of-motion', title: 'Chapter 8. Force and Laws of Motion' },
        { id: 'gravitation', title: 'Chapter 9. Gravitation' },
        { id: 'work-and-energy', title: 'Chapter 10. Work and Energy' },
        { id: 'sound', title: 'Chapter 11. Sound' },
        { id: 'improvement-in-food-resources', title: 'Chapter 12. Improvement in Food Resources' }
      ],
      History: [
        { id: 'the-french-revolution', title: 'Chapter 1. The French Revolution' },
        { id: 'socialism-in-europe-and-the-russian-revolution', title: 'Chapter 2. Socialism in Europe and the Russian Revolution' },
        { id: 'nazism-and-the-rise-of-hitler', title: 'Chapter 3. Nazism and the Rise of Hitler' },
        { id: 'forest-society-and-colonialism', title: 'Chapter 4. Forest Society and Colonialism' },
        { id: 'pastoralists-in-the-modern-world', title: 'Chapter 5. Pastoralists in the Modern World' }
      ],
      Geography: [
        { id: 'india-size-and-location', title: 'Chapter 1. India – Size and Location' },
        { id: 'physical-features-of-india', title: 'Chapter 2. Physical Features of India' },
        { id: 'drainage', title: 'Chapter 3. Drainage' },
        { id: 'climate', title: 'Chapter 4. Climate' },
        { id: 'natural-vegetation-and-wild-life', title: 'Chapter 5. Natural Vegetation and Wild Life' },
        { id: 'population', title: 'Chapter 6. Population' }
      ],
      Civics: [
        { id: 'what-is-democracy-why-democracy', title: 'Chapter 1. What is Democracy? Why Democracy?' },
        { id: 'constitutional-design', title: 'Chapter 2. Constitutional Design' },
        { id: 'electoral-politics', title: 'Chapter 3. Electoral Politics' },
        { id: 'working-of-institutions', title: 'Chapter 4. Working of Institutions' },
        { id: 'democratic-rights', title: 'Chapter 5. Democratic Rights' }
      ],
      Economics: [
        { id: 'the-story-of-village-palampur', title: 'Chapter 1. The Story of Village Palampur' },
        { id: 'people-as-resource', title: 'Chapter 2. People as Resource' },
        { id: 'poverty-as-a-challenge', title: 'Chapter 3. Poverty as a Challenge' },
        { id: 'food-security-in-india', title: 'Chapter 4. Food Security in India' }
      ]     
    }
  },
  8: {
    subjects: {
      Science: [
        { id: 'crop-production-and-management', title: 'Chapter 1. Crop Production and Management' },
        { id: 'microorganisms-friend-and-foe', title: 'Chapter 2. Microorganisms: Friend and Foe' },
        { id: 'coal-and-petroleum', title: 'Chapter 3. Coal and Petroleum' },
        { id: 'combustion-and-flame', title: 'Chapter 4. Combustion and Flame' },
        { id: 'conservation-of-plants-and-animals', title: 'Chapter 5. Conservation of Plants and Animals' },
        { id: 'reproduction-in-animals', title: 'Chapter 6. Reproduction in Animals' },
        { id: 'reaching-the-age-of-adolescence', title: 'Chapter 7. Reaching the Age of Adolescence' },
        { id: 'force-and-pressure', title: 'Chapter 8. Force and Pressure' },
        { id: 'friction', title: 'Chapter 9. Friction' },
        { id: 'sound', title: 'Chapter 10. Sound' },
        { id: 'chemical-effects-of-electric-current', title: 'Chapter 11. Chemical Effects of Electric Current' },
        { id: 'some-natural-phenomena', title: 'Chapter 12. Some Natural Phenomena' },
        { id: 'light', title: 'Chapter 13. Light' }
      ],
      History: [
        { id: 'how-when-and-where', title: 'Chapter 1. How, When and Where' },
        { id: 'from-trade-to-territory', title: 'Chapter 2. From Trade to Territory: The Company Establishes Power' },
        { id: 'ruling-the-countryside', title: 'Chapter 3. Ruling the Countryside' },
        { id: 'tribals-dikus-and-the-vision-of-a-golden-age', title: 'Chapter 4. Tribals, Dikus and the Vision of a Golden Age' },
        { id: 'when-people-rebel-1857-and-after', title: 'Chapter 5. When People Rebel: 1857 and After' },
        { id: 'civilising-the-native-educating-the-nation', title: 'Chapter 6. Civilising the “Native”, Educating the Nation' },
        { id: 'women-caste-and-reform', title: 'Chapter 7. Women, Caste and Reform' },
        { id: 'the-making-of-the-national-movement', title: 'Chapter 8. The Making of the National Movement: 1870s – 1947' }
      ],
      Geography: [
        { id: 'resources', title: 'Chapter 1. Resources' },
        { id: 'land-soil-water-natural-vegetation-and-wildlife-resources', title: 'Chapter 2. Land, Soil, Water, Natural Vegetation and Wildlife Resources' },
        { id: 'agriculture', title: 'Chapter 3. Agriculture' },
        { id: 'industries', title: 'Chapter 4. Industries' },
        { id: 'human-resources', title: 'Chapter 5. Human Resources' }
      ],
      Civics: [
        { id: 'the-indian-constitution', title: 'Chapter 1. The Indian Constitution' },
        { id: 'understanding-secularism', title: 'Chapter 2. Understanding Secularism' },
        { id: 'parliament-and-the-making-of-laws', title: 'Chapter 3. Parliament and the Making of Laws' },
        { id: 'judiciary', title: 'Chapter 4. Judiciary' },
        { id: 'understanding-marginalisation', title: 'Chapter 5. Understanding Marginalisation' },
        { id: 'confronting-marginalisation', title: 'Chapter 6. Confronting Marginalisation' },
        { id: 'public-facilities', title: 'Chapter 7. Public Facilities' },
        { id: 'law-and-social-justice', title: 'Chapter 8. Law and Social Justice' }
      ],
      Math: [
        { id:'all-formula-of-math-chapter-wise', title: 'All Formula of class 8 MAths Chapter-wise'}
      ]     
    }
  }
};
export default notesData;