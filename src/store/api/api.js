import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = 'https://api.kinopoisk.dev/v1.4/'
const stateFilms = 'movie?page=2&limit=12&selectFields=id&selectFields=name&selectFields=year&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=movieLength&notNullFields=poster.url&notNullFields=genres.name&notNullFields=countries.name&sortField=&sortType=1&type=movie&year=2020-2024'
const baseQuery = `&selectFields=id&selectFields=name&selectFields=description&selectFields=year&selectFields=rating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=persons&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=year&notNullFields=rating.imdb&notNullFields=movieLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=persons.id&notNullFields=persons.name&sortField=&sortType=1`

export const filmApi = createApi({
    reducerPath: 'filmApi',
    // tagTypes: ['Film'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({

        getFilmsByName: builder.query({
            query: (data) => ({
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'X-API-KEY': '1676QMC-5HRMB52-KGRA9G2-V1SWGC6'
                },
                url: `movie/search?page=1&limit=${data.size}&query=${data.string}`,
            })
        }),
        getFilms: builder.query({
            query: (arr) => ({
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'X-API-KEY': '1676QMC-5HRMB52-KGRA9G2-V1SWGC6'
                },
                url: `movie${arr[1]==''? '' : '/search'}?page=${arr[0].currPage}&limit=${arr[0].sizePage}${arr[1]==''? baseQuery : `${baseQuery}&query=${arr[1]}`}`,
            })
        })

    })
})

export const {useGetFilmsByNameQuery, useGetFilmsQuery} = filmApi