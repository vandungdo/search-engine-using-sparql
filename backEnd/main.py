from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sparql_query import query_data

origins = [
    '*'
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    
    return {'data': query_data()}


