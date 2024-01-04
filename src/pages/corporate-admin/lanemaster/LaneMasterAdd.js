import React, { useState } from 'react'
import CustomInput from '../../../components/common/CustomInput/CustomInput';
import CustomFileUpload from '../../../components/common/CustomFileUpload/CustomFileUpload';
import CustomDatePicker from '../../../components/common/CustomDatePicker/CustomDatePicker';
import CustomDropdown from '../../../components/common/CustomDropdown/CustomDropdown';
import CustomMonthYear from '../../../components/common/CustomMonthYear/CustomMonthYear';
import CustomRadio from '../../../components/common/CustomRadio/CustomRadio';
import BodyHeader from '../../../components/common/CommonBodyHeader';


const LaneMasterAdd = () => {
   const [fuelType, setFuelType] = useState(true);
   const [tyreSelect, setTyreSelected] = useState("");
   const [makeSelect, setMake] = useState("");
   const [tonnageSelect, setTonnage] = useState("");
   const [vehicleSelect, setVehicleCategory] = useState("");
   const [serviceSelect, setServiceRecord] = useState("");

   const [tyreAdd, setTyreAdd] = useState([{ selectedFile: "", tyreType: "" }]);
   const [serviceBillAdd, setServiceBillAdd] = useState([
      { selectedBillFile: "", serviceRecord: "" },
   ]);

   const handleServiceBill = () => {
      setServiceBillAdd([
         ...serviceBillAdd,
         { selectedBillFile: "", serviceRecord: "" },
      ]);
   };
   const handleServiceBillDelete = () => {
      if (serviceBillAdd.length > 1) {
         const updatedServiceBill = serviceBillAdd.slice(0, -1); // Removes the last element
         setServiceBillAdd(updatedServiceBill);
      }
   };
   const handleTyreAdd = () => {
      setTyreAdd([...tyreAdd, { selectedFile: "", tyreType: "" }]);
   };
   const handleTyreDelete = () => {
      if (tyreAdd.length > 1) {
         const updatedTyreAdd = tyreAdd.slice(0, -1); // Removes the last element
         setTyreAdd(updatedTyreAdd);
      }
   };
   return (
      <div>
         <BodyHeader title="Add Lane Master" />
         <form className="p-5 shadow-lg">
            <div className="card card-primary">
               <div className="card-header">
                  <h3 className="card-title">Personal Details</h3>
               </div>
               <div className="card-body">
                  <div className="row">
                     <div className="col-lg-4">
                        <CustomDropdown
                           label="Lane Name"
                           optionData={["Select", "customer1", "customer2", "customer3"]}
                           value={makeSelect}
                           onChange={(event) => setMake(event.target.value)}
                        />
                     </div>

                     <div className="col-lg-4">
                        {/* Dimension  */}
                        <CustomDropdown
                           label="Vendor Name"
                           optionData={["NA", "customer1", "customer2", "customer3"]}
                           value={makeSelect}
                           onChange={(event) => setMake(event.target.value)}
                        />
                     </div>

                     <div className="col-lg-4">
                        {/* Financed by sec */}
                        <CustomInput
                           label="Origin"
                           id="#Origin"
                           placeholder="Enter Origin"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                           label="Destination"
                           id="#Destination"
                           placeholder="Enter Destination"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                           label="Driver Trip Advance"
                           id="#tripadvance"
                           placeholder="E.g. 500.00"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                           label="Trip Diesel budget (ltr)"
                           id="#dieselBudget"
                           placeholder="E.g. 500.00"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                           label="Trip Adblue budget (ltr)"
                           id="#adblueBudget"
                           placeholder="E.g. 500.00"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                           label="Trip Toll"
                           id="#tripToll"
                           placeholder="E.g. 500.00"
                        />
                     </div>

                     <div className="col-lg-4">
                        {/* Vehicle Type  */}
                        <CustomDropdown
                           label="Vehicle Type"
                           optionData={["Vehicle", "Vehicle1", "Vehicle2", "Vehicle3"]}
                           value={makeSelect}
                           onChange={(event) => setMake(event.target.value)}
                        />
                     </div>

                     <div className="col-lg-4">
                        {/* Tonnage */}
                        <CustomDropdown
                           label="Tonnage"
                           optionData={["5T", "6T", "7T", "8T", "9T", "10.5T", "15T", "18T", "Any Other"]}
                           value={makeSelect}
                           onChange={(event) => setMake(event.target.value)}
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                           label="Customer Name (Including broker)"
                           id="#nameBroker"
                           placeholder="Broker"
                        />
                     </div>

                     <div className="col-lg-4">
                        <CustomInput
                           label="TAT (in Hrs)"
                           id="#tat"
                           inputType="number"
                           placeholder="2 Hrs"
                        />
                     </div>
                  </div>
               </div>

            </div>
            <div className="col-12 mt-3 text-center">
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

export default LaneMasterAdd
