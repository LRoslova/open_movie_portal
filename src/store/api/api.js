import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = 'https://api.kinopoisk.dev/v1.4/'
const stateFilms = 'movie?page=2&limit=12&selectFields=id&selectFields=name&selectFields=year&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=movieLength&notNullFields=poster.url&notNullFields=genres.name&notNullFields=countries.name&sortField=&sortType=1&type=movie&year=2020-2024'

export const filmApi = createApi({
    reducerPath: 'filmApi',
    // tagTypes: ['Film'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({

        getFilms: builder.query({
            query: () => ({
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'X-API-KEY': '1676QMC-5HRMB52-KGRA9G2-V1SWGC6'
                },
                url: `${stateFilms}`,
            })
        }),

    })
})

export const {useGetFilmsQuery} = filmApi