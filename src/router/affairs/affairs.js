// movie路由
export default{
    path:'/movie',
    component:()=>import('../../views/Movie/movie'),
    children:[
        {
            path:'city',
            component:()=>import('../../components/City/city')
        },
        {
            path:'nowPlaying',
            component:()=>import('../../components/NowPlaying/now')
        },
        {
            path:'comingSoon',
            component:()=>import('../../components/ComingSoon/comingsoon')
        },
        {
            path:'search',
            component:()=>import('../../components/Search/search')
        },
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}