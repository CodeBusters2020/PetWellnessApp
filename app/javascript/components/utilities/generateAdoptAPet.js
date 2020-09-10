const generateAdoptAPet = (zip, radius, api_key) => {
    return {"apikey": api_key,
    "objectType":"animals",
    "objectAction":"publicSearch",
    "search":
    {
        "resultStart": "0",
        "resultLimit": "3",
        "resultSort": "animalID",
        "resultOrder": "asc",
        "filters":
        [
            {
                "fieldName": "animalStatus",
                "operation": "equals",
                "criteria": "Available"
            },
            {
                "fieldName": "animalLocationDistance",
                "operation": "radius",
                "criteria": radius
            },
            {
                "fieldName": "animalLocation",
                "operation": "equals",
                "criteria": zip
            }
        ],
        "filterProcessing": "1",
        "fields":
        [
            "animalID","animalBirthdate","animalBreed","animalDescription","animalLocation","animalLocationDistance","animalName","animalSex","animalSpecies","animalAgeString", "animalGeneralAge","animalThumbnailUrl"
        ]
    }
}
}

export default generateAdoptAPet