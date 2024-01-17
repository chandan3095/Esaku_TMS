import React, { useState } from 'react'
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import CustomFileUpload from '../../../components/common/CustomFileUpload/CustomFileUpload';
import MultipleFileUpload from '../../../components/common/MultipleFileUpload/MultipleFileUpload';
import MultiSelectDropdown from '../../../components/common/MultiSelectDropdown/MultiSelectDropdown';
import BodyHeader from '../../../components/common/CommonBodyHeader';
import CustomTextArea from '../../../components/common/CustomTextArea/CustomTextArea';

const ContractorMasterAdd = () => {
   const [addContact, setAddContact] = useState([""]);
   const [addEmail, setAddEmail] = useState([""]);

   const handleAddContact = () => {
      setAddContact([...addContact, ""]);
   };
   const handleAddEmail = () => {
      setAddEmail([...addEmail, ""]);
   };

   const handleRemoveContact = (index) => {
      const updatedContacts = [...addContact];
      updatedContacts.splice(index, 1);
      setAddContact(updatedContacts);
   };
   return (
      <div>
         <BodyHeader title="Add Contractor Master" />
         <form className="p-3 shadow-lg">
            <div className="row">
               <div className="col-lg-12">
                  <div className="card card-primary">
                     <div className="card-header">
                        <h3 className="card-title">Personal Details</h3>
                     </div>
                     <div className="card-body">
                        <div className="row">
                           <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                              <CustomInput
                              require={require}
                                 label="Contractor Name"
                                 id="#ContractorName"
                                 name="ContractorName"
                                 placeholder="E.g contractor"
                              />
                           </div>

                           <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                              <CustomInput
                              require={require}
                                 label="Location"
                                 id="#location"
                                 name="location"
                                 placeholder="Enter Location"
                              />
                           </div>

                           <div className="col-lg-4">
                              <CustomInput
                              require={require}
                                 label="GST Number"
                                 id="gstNumber"
                                 placeholder="Enter GST Number"
                              />
                           </div>

                           <div className="col-lg-4">
                              <label className="text-bold">GST Document <span className='text-danger'>*</span></label>
                              <CustomFileUpload label="GST Details" id="gst" name="gst" />
                           </div>

                           <div className="col-12 col-sm-12 col-md-12 col-lg- mb-3">
                              <CustomTextArea
                              label="Address"
                              placeholder="Enter Address"
                              />
                           </div>

                           <div className="col-12">
                              {addContact.map((item, index) => {
                                 const {contact, email} = item
                                 return (
                                    <div key={index} className={
                                       index < addContact.length - 1 &&
                                       addContact.length > 1
                                         ? "row border-bottom mb-4 pb-3"
                                         : "row"
                                     }>
                                       <div className="col-12 col-sm-12 col-md- col-lg-4">
                                          <CustomInput
                                          require={require}
                                             label="Contact Person Name"
                                             inputType="number"
                                             id="#vendorMobile"
                                             name="vendorMobile"
                                             placeholder="Enter Contact Person Contact Persion Name."
                                             value={contact}
                                          />
                                       </div>
                                       <div className="col-12 col-sm-12 col-md- col-lg-4">
                                          <CustomInput
                                          require={require}
                                             label="Mobile No"
                                             inputType="number"
                                             id="#vendorMobile"
                                             name="vendorMobile"
                                             placeholder="Enter Contact Person Mobile No."
                                             value={contact}
                                          />
                                       </div>
                                       <div className="col-12 col-sm-12 col-md- col-lg-4">
                                          <CustomInput
                                          require={require}
                                             label="Email Id"
                                             inputType="text"
                                             id="#vendorEmail"
                                             name="vendorEmail"
                                             placeholder="Enter Contact Person Email"
                                             value={email}
                                          />
                                       </div>

                                       {index > 0 && (
                                       <div className="col-12 col-sm-12 col-md-12">
                                          
                                          <button
                                             type="button"
                                             className="btn btn-danger float-right ml-3 mb-3"
                                             onClick={handleRemoveContact}
                                          >
                                             <i className="fas fa-trash"></i> Delete item
                                          </button>
                                       </div>
                                       )}
                                    </div>
                                 );
                              })}
                              <button
                                 type="button"
                                 className="btn btn-primary float-right"
                                 onClick={handleAddContact}
                              >
                                 <i className="fas fa-plus"></i> Add item
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="card card-primary">
               <div className="card-header">
                  <h3 className="card-title">Bank Details</h3>
               </div>
               <div className="card-body">
                  <div className="row">
                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="Account Number"
                           id="AccountNumber"
                           placeholder="Enter Account Number"
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="Bank name"
                           id="bankName"
                           placeholder="Enter Bank Name"
                        />
                     </div>
                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="IFSC Code"
                           id="ifscCode"
                           placeholder="Enter IFSC Code"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                        require={require}
                           label="Account Holder Name"
                           id="accountHolderName"
                           placeholder="Enter Account Holder name"
                        />
                     </div>
                     <div className="col-lg-4">
                        <label className="text-bold">Bank Document<span className='text-danger'>*</span></label>
                        <CustomFileUpload
                           label="Bank Details"
                           id="bankDetails"
                           name="bankDetails"
                        />
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-lg-12">
                  <div className="card card-primary">
                     <div className="card-header">
                        <h3 className="card-title">Agreement Details</h3>
                     </div>
                     <div className="card-body row">
                        <div className="col-lg-4">
                           <MultipleFileUpload label="Agreement Details" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-3 text-center">
               <button className="btn btn-primary px-4 py-3" type="submit">
                  <h5 className="mb-0 text-uppercase">Submit</h5>
               </button>
               <button className="btn btn-danger ml-3 px-4 py-3" type="submit">
                  <h5 className="mb-0 text-uppercase">reset</h5>
               </button>
            </div>
         </form>
      </div>
   )
}

export default ContractorMasterAdd
