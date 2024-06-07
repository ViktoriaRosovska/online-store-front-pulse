import { CatalogComponent } from "components/CatalogComponent/CatalogComponent"
import { useLocation } from "react-router-dom"
import { useFindProductsQuery, useLazyFindProductsQuery } from "../../redux/products/productsApi"
import { CardsList } from "components/CardsList/CardsList"
import { useEffect } from "react"

const SearchPage = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const searchQuery = params.get('query')

    const [findProducts, { data, isError, isFetching }] = useLazyFindProductsQuery()
    
    useEffect(() => {
        if (searchQuery) {
            findProducts({name: searchQuery})
        }
    }, [searchQuery, findProducts])

    return (
        <CatalogComponent
            title={`Результат пошуку "${searchQuery}"`}
            data={data?.products}
            sex={""}
           loader={findProducts}
            isError={isError}
            page={data?.page}
            totalPages={data?.totalPages}
            isFetching={isFetching}
        />
        // <CardsList
        //     data={data?.products}
        //     isFetching={isFetching}
        //     isError={isError}
        //     totalPages={data?.totalPages}
        //     page={data?.page}
        // />
    )
}

export default SearchPage