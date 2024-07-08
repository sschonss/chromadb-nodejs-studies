import { ChromaClient } from 'chromadb'
const client = new ChromaClient();

const collection = await client.getOrCreateCollection({
    name: "my_collection",
});

await collection.upsert({
    documents: [
        "Brazil is a country of South America",
        "Brazil is known for its soccer team",
        "Argentina is another country in South America",
    ],
    ids: ["id1", "id2", "id3"],
});

const results = await collection.query({
    queryTexts: ["football"],
    nResults: 1,
});

console.log(results)
