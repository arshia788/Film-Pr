 
export const splitFilms=(data)=>{
    const [a, b, c, d, e] = data
    const finalFilms= [a, b, c, d, e]
    return finalFilms
}


export const filterLoveFilms=(data)=>{
    // gofti boro item hai ro filter bezan ke cateogory love dashte bashan
    const loveFilms= data.filter((item)=> item.category === 'love')
    return loveFilms
}

export const filterActionFilms=(data)=>{
    const actionFilms= data.filter((item)=> item.category === "action")
    return actionFilms
}


// omadi 2ta props gerefti avali hamoon kole film ma hast ke omadi hame data ha ro gerefti 
// 2vomi on category on film hast ke click shodeh hala baray chi in kar ro kardi ta betoni moghi ke dari az kole data loop mizani 
// biay film hai ba on categori ro begiri ke film ma dareh neshon dadeh mishe

export const relatedFilms=(data, category)=>{
    const relatedFm= data.filter((item)=> item.category === category)
    return relatedFm
}


// export const sort= (data)=>{
//     const sortFilms= data.map((item)=> item.mark)
//     const yoyo= sortFilms.map((item)=> Number(item))
//     const list= yoyo.reverse()
//     return list
// }






