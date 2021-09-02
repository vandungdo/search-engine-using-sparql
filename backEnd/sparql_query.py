from SPARQLWrapper import SPARQLWrapper, JSON

def query_data():

    sparql = SPARQLWrapper("http://127.0.0.1:8080/fuseki/bam_organigramm")
    sparql.setQuery("""
        SELECT ?subject ?predicate ?object
        WHERE {
        ?subject ?predicate ?object
        }
        LIMIT 25
    """)
    sparql.setReturnFormat(JSON)
    results = sparql.query().convert()

    return results



