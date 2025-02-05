import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createStudent = async (data) => {
    console.log("Submitting Data:", data);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/createUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("FORM RESPONSE......", response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        // alert(`Error: ${errorData.message || "Something went wrong!"}`);
        toast.error("Server Error");
        return;
      }

      // alert("Student created successfully!");
      toast.success('Application Submitted Successfully!')
      navigate("/");
    } catch (error) {
      console.error("Request failed:", error);
      // alert("Network error. Please try again.");
      toast.error("Network error. Please try again.");
      
    }
  };

  return (
    <div className="p-4">
       {/* Toast Container must be included */}
       <ToastContainer 
        position="top-right"
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form onSubmit={handleSubmit(createStudent)}>
        <div className="mb-3">
          <input
            className="form-control p-2"
            type="text"
            placeholder="Enter Your Full Name"
            {...register("name", { required: true })}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control p-2"
            type="tel"
            placeholder="Enter Your Phone Number"
            {...register("phone", { required: true })}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control p-2"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select p-2"
            {...register("level", { required: true })}
          >
            <option value="" disabled selected>
              Level
            </option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
          </select>
        </div>

        <div className="mb-3">
          <select
            className="form-select p-2"
            {...register("programs", { required: true })}
          >
            <option value="" disabled selected>
              Programs
            </option>
            <option value="Bachelor of Public Health (BPH)">
              Bachelor of Public Health (BPH)
            </option>
            <option value="BSc in Environment & Sustainability (Bsc-ES)">
              BSc in Environment & Sustainability (Bsc-ES)
            </option>
            <option value="Master of Public Health">
              Master of Public Health
            </option>
            <option value="Master of Public Policy (MPP)">
              Master of Public Policy (MPP)
            </option>
          </select>
        </div>

        <div className="mb-3">
          <select
            className="form-select p-2"
            {...register("state", { required: true })}
          >
            <option value="" disabled selected>
              State
            </option>
            <option value="mh">mh</option>
            <option value="up">up</option>
          </select>
        </div>

        <div className="mb-3">
          <select
            className="form-select p-2"
            {...register("city", { required: true })}
          >
            <option value="" disabled selected>
              City
            </option>
            <option value="pune">Pune</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>

        <button type="submit" className="btn submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
