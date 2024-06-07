import "./Products.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../app/store";
import { product } from "../../types";
import { axiosWithToken, axiosWithoutToken } from "../../utils/axiosInstances";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import handleError from "../../utils/HandleErrors";
import noImage from "/images/noImage.png"
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { brands } from "../../utils/brands"
const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

const Products = () => {

    const [loading, setLoading] = useState(false)
    const [show, setShow] = useRecoilState(modalState)
    const [products, setProducts] = useState<product[]>([]);
    const [categories, setCategories] = useState<string[]>([])
    const [selectedProduct, setSelectedProduct] = useState<product>({
        id: 0,
        name: "",
        description: "",
        price: 0,
        stock: 0,
        categoryName: "",
        image: "",
        thumbnail: ""
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 12;
    const visiblePages = 5;

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const categoriesResponse = await axiosWithoutToken.get<string[]>(`${SERVER_URL}/api/v1/category/getCategoriesNames`)
            if (categoriesResponse.data) {
                setCategories(categoriesResponse.data.sort())
            }
            const res = await axiosWithoutToken.get(`${SERVER_URL}/api/v1/products/public/getProductsPaginated?page=${currentPage}&size=${pageSize}`)
            if (res.data) {
                setTotalPages(Math.ceil(res.data.totalCount / pageSize));
                setProducts(res.data.data);
            }
        } catch (error: any) {
            handleError(error)
        }
        setLoading(false)
    };

    let sliderSettings = {
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        swipeToSlide: true
    };

    const handleSearch = async (event: any) => {
        setLoading(true)
        let searchTerm
        event.preventDefault()
        try {
            if (event.type == "submit") searchTerm = event.target[0].value
            else event.target.value ? searchTerm = event.target.value : searchTerm = ""
            let res
            if (searchTerm == "") {
                res = await axiosWithoutToken.get(`${SERVER_URL}/api/v1/products/public/getProductsPaginated?page=${currentPage}&size=${pageSize}`)
                if (res.data) {
                    setProducts(res.data.data);
                }
            } else {
                res = await axiosWithoutToken.get(`${SERVER_URL}/api/v1/products/public/searchProduct?searchTerm=${searchTerm}`)
                if (res.data) {
                    setProducts(res.data);
                }
            }

            setLoading(false)
        } catch (error: any) {
            handleError(error)
            setLoading(false)
        }
    }

    const handleResetSearch = (event: any) => {
        if (event.target.value == "") fetchProducts()
    }

    useEffect(() => {
        fetchProducts();
    }, [currentPage]);

    return (
        <div className="products w-100 h-100 min-vh-100 overflow-auto bg-custom flex-column">
            <div className="w-sm-100 w-lg-100 d-flex flex-column justify-content-center rounded mt-3 p-1">
                <h3>¡Dale un gustito, se lo merece!</h3>
                <p>Veni y conocé todos los accesorios que tenemos para tu amigo de cuatro patas. Chalecos, collares, correas, y si querés mimarlo un poco de más ¡tambien tenemos juguetes y golosinas!</p>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <Container>
                    <Row>
                        <Form onSubmit={handleSearch}>
                            <Row className="mt-3 mb-3 d-flex justify-content-center align-items-center w-100">
                                <Col xs="auto" lg="4">
                                    <Form.Control
                                        type="search"
                                        placeholder="Buscar"
                                        className=""
                                        onChange={handleResetSearch}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <button type="submit" className="custom-btn bg-custom p-1 ps-3 pe-3">Buscar</button>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                    <Row className="mt-3 mb-0 mb-lg-5 w-100">
                        <h6>Nuestras marcas:</h6>
                        <div className="slider-container mt-3">
                            <Slider {...sliderSettings}>
                                {brands.map((brand) =>
                                    <div key={brand.alt} className="mx-3 d-flex justify-content-center">
                                        <Image style={{ mixBlendMode: "multiply", width: "auto", height: "50px", objectFit: "fill" }} src={brand.src} alt={brand.alt} title={brand.alt} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className="text-start mb-3 d-flex justify-content-center align-items-start" lg={2}>
                            <Dropdown as={ButtonGroup}>
                                <div className="custom-btn">
                                    <Dropdown.Toggle id="dropdown-custom-1" variant="none" >Categorías</Dropdown.Toggle>
                                </div>
                                <Dropdown.Menu className="">
                                    {categories.map((category) => (
                                        <Dropdown.Item>{category}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            {!loading ? <Row xs={1} md={2} lg={1} className="g-4">
                                {products.length > 0 ? products.map(product =>
                                    <Col key={product.id}>
                                        <Row key={product.id} className="d-flex flex-row bg-light text-start">
                                            <Col xs="6" lg="3" className="d-flex justify-content-center">
                                                <img style={{ height: '150px', maxWidth: "100%", objectFit: "contain" }} className='custom-card-img p-1 rounded' src={product.thumbnail ? `data:image/jpeg;base64,${product.thumbnail}` : noImage} alt={product.name} />
                                            </Col>
                                            <Col xs="6" lg="8" className="d-flex flex-column justify-content-between">
                                                <div className="d-flex flex-column justify-content-between">
                                                    <h6 style={{ fontSize: "1.5em" }}>{product.name}</h6>
                                                    <p className="d-none d-lg-flex">{product.description}</p>
                                                </div>
                                                <div className="d-flex flex-row justify-content-between">
                                                    <p>${product.price}</p>
                                                    <p>Stock: {product.stock}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                                    :
                                    <div className="">
                                        <img className="w-25" src="/images/grumpy.webp" alt="Grumpy Cat" />
                                        <h3>No hay resultados.</h3>
                                    </div>
                                }
                                <div className='d-flex m-auto justify-content-center mt-5 w-50'>
                                    <Pagination className='mt-5'>
                                        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                                        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                                        {currentPage > 2 && <Pagination.Item
                                            key={currentPage - 2}
                                            onClick={() => handlePageChange(currentPage - 2)}
                                        >
                                            {currentPage - 2}
                                        </Pagination.Item>}
                                        {currentPage > 1 && <Pagination.Item
                                            key={currentPage - 1}
                                            onClick={() => handlePageChange(currentPage - 1)}
                                        >
                                            {currentPage - 1}
                                        </Pagination.Item>}
                                        <Pagination.Item
                                            key={currentPage}
                                            active
                                            onClick={() => handlePageChange(currentPage)}
                                        >
                                            {currentPage}
                                        </Pagination.Item>
                                        {currentPage <= totalPages - 1 && <Pagination.Item
                                            key={currentPage + 1}
                                            onClick={() => handlePageChange(currentPage + 1)}
                                        >
                                            {currentPage + 1}
                                        </Pagination.Item>}
                                        {currentPage <= totalPages - 2 && <Pagination.Item
                                            key={currentPage + 2}
                                            onClick={() => handlePageChange(currentPage + 2)}
                                        >
                                            {currentPage + 2}
                                        </Pagination.Item>}
                                        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                                        <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
                                    </Pagination>
                                </div>
                            </Row>

                                : <div className='mt-5'>
                                    <Spinner />
                                </div>}
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Products

