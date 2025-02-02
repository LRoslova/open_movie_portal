import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = 'https://api.kinopoisk.dev/v1.4/'
const stateFilms = '&selectFields=id&selectFields=name&selectFields=description&selectFields=year&selectFields=rating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=year&notNullFields=rating.imdb&notNullFields=movieLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&sortField=&sortType=1&year=1874-2022'
const baseQuery = `&selectFields=id&selectFields=name&selectFields=description&selectFields=year&selectFields=rating&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=persons&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=year&notNullFields=rating.imdb&notNullFields=movieLength&notNullFields=genres.name&notNullFields=countries.name&notNullFields=poster.url&notNullFields=persons.id&notNullFields=persons.name&sortField=&sortType=1`

// id=alalla&id=rdrdrdr
const printId = (user) => {
    let idArr = JSON.parse(localStorage.getItem(user)).favorites
    return '&id=' + idArr.join('&id=')
}

export const filmApi = createApi({
    reducerPath: 'filmApi',
    // tagTypes: ['Film'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({

        getFavorites: builder.query({
            query: (obj) => ({
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'X-API-KEY': '1676QMC-5HRMB52-KGRA9G2-V1SWGC6'
                },
                url: `movie?page=${obj.currPage}&limit=${obj.sizePage}${obj.favorites !="" ? printId(obj.favorites) : `${stateFilms}`}`,
            })
        }),
        getFilms: builder.query({
            query: (arr) => ({
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'X-API-KEY': '1676QMC-5HRMB52-KGRA9G2-V1SWGC6'
                },
                url: `movie${arr[1]==''? '' : '/search'}?page=${arr[0].currPage}&limit=${arr[0].sizePage}${arr[1]==''? stateFilms : `${stateFilms}&query=${arr[1]}`}`,
            })
        })

    })
})

export const {useGetFavoritesQuery, useGetFilmsQuery} = filmApi