import {
   MDBBtn,
   MDBCard,
   MDBCardBody,
   MDBCardHeader,
   MDBCol,
   MDBContainer,
   MDBIcon,
   MDBInput,
   MDBListGroup,
   MDBListGroupItem,
   MDBRipple,
   MDBRow,
   MDBTypography,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem } from '../features/CartSLice';


export default function PaymentMethods() {

   const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getCartTotal());
   }, [cart, dispatch])

   return (
      <section className="h-100 gradient-custom">
         <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center my-4">
               <MDBCol md="8">
                  <MDBCard className="mb-4">
                     <MDBCardHeader className="py-3">
                        <MDBTypography tag="h5" className="mb-0">
                           Cart - {cart.length} items
                        </MDBTypography>
                     </MDBCardHeader>
                     {cart.map((data) => (
                        <>
                           <MDBCardBody>
                              <MDBRow>
                                 <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                    <MDBRipple rippleTag="div" rippleColor="light"
                                       className="bg-image rounded hover-zoom hover-overlay">
                                       <img
                                          src={data.img}
                                          className="w-100" />
                                       <a href="#!">
                                          <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                          </div>
                                       </a>
                                    </MDBRipple>
                                 </MDBCol>

                                 <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                    <p>
                                       <strong>{data.title}</strong>
                                    </p>

                                    <button
                                       type="button"
                                       className="btn btn-primary btn-sm me-1 mb-2"
                                       data-mdb-toggle="tooltip"
                                       title="Remove item"
                                       onClick={() => dispatch(removeItem(data.id))}
                                    >
                                       <i className="fas fa-trash"></i>
                                    </button>
                                 </MDBCol>
                                 <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                       <MDBBtn className="px-3 me-2">
                                          <MDBIcon fas icon="minus" />
                                       </MDBBtn>

                                       <MDBInput defaultValue={data.quantity} min={0} type="number" label="Quantity" />

                                       <MDBBtn className="px-3 ms-2">
                                          <MDBIcon fas icon="plus" />
                                       </MDBBtn>
                                    </div>

                                    <p className="text-start text-md-center">
                                       <strong>{data.price}</strong>
                                    </p>
                                 </MDBCol>
                              </MDBRow>
                           </MDBCardBody>
                        </>
                     ))}
                  </MDBCard>
               </MDBCol>
               <MDBCol md="4">
                  <MDBCard className="mb-4">
                     <MDBCardHeader>
                        <MDBTypography tag="h5" className="mb-0">
                           Summary
                        </MDBTypography>
                     </MDBCardHeader>
                     <MDBCardBody>
                        <MDBListGroup flush>
                           <MDBListGroupItem
                              className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                              Total Quantity
                              <span>{totalQuantity}</span>
                           </MDBListGroupItem>
                           <MDBListGroupItem
                              className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                              <div>
                                 <strong>Total amount</strong>
                              </div>
                              <span>
                                 <strong>{totalPrice}</strong>
                              </span>
                           </MDBListGroupItem>
                        </MDBListGroup>

                        <MDBBtn block size="lg">
                           Go to checkout
                        </MDBBtn>
                     </MDBCardBody>
                  </MDBCard>
               </MDBCol>
            </MDBRow>
         </MDBContainer>
      </section>
   );
}