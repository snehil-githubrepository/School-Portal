import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faGraduationCap,
  faSchool,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import LoginModal from "./Modal/LoginModal";
import RegisterModal from "./Modal/RegisterModal";
import TeacherLoginModal from "./Modal/TeacherLoginModal";

export const Landing = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isTeacherLoginModalOpen, setIsTeacherLoginModalOpen] = useState(false);

  useEffect(() => {
    const studentToken = localStorage.getItem("studentToken");
    const teacherToken = localStorage.getItem("teacherToken");
    const adminToken = localStorage.getItem("token");

    if (studentToken) {
      navigate("/student/dashboard");
    } else if (teacherToken) {
      navigate("/teacher/dashboard");
    } else if (adminToken) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleOpenRegister = () => {
    setIsLoginModalOpen(false);
    isRegisterModalOpen(true);
  };

  const handleOpenLogin = () => {
    isRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  //Closing Modals **Logic**
  const handleLoginCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleRegisterCloseModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleTeacherLoginCloseModal = () => {
    setIsTeacherLoginModalOpen(false);
  };

  return (
    <div className="w-full h-full bg-white">
      <div className="component-container flex items-start laptop:items-center justify-center">
        <div className="w-full flex flex-col laptop:flex-row items-center justify-between gap-4">
          <div className="order-2 laptop:order-1 h-fit laptop:h-full flex flex-col items-center justify-between">
            <p className="text-center text-[30px] laptop:text-[48px] font-extrabold text-gray-900 leading-tight font-serif">
              Shivam Public School
            </p>

            <div className=" bg-white laptop:mt-8 w-fit flex flex-col mx-auto items-center laptop:items-start gap-4">
              <div className="flex gap-4">
                <PrimaryButton
                  extra_styles={{ width: "100%" }}
                  onClick={() => setIsRegisterModalOpen(true)}
                >
                  <div className="flex items-center gap-2 px-4 py-2">
                    <FontAwesomeIcon
                      icon={faSchool}
                      className="text-[20px] laptop:text-[36px]"
                    />
                    <p className="text-lg laptop:text-xl">Register</p>
                  </div>
                </PrimaryButton>
                <PrimaryButton
                  color={"student"}
                  extra_styles={{ width: "100%" }}
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  <div className="flex items-center gap-2 px-4 py-2">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-[20px] laptop:text-[36px]"
                    />
                    <p className="text-lg laptop:text-xl">Login for Students</p>
                  </div>
                </PrimaryButton>
              </div>
              <div className="flex gap-4">
                <PrimaryButton
                  color={"teacher"}
                  extra_styles={{
                    width: "100%",
                    border: "1.2px solid cyan",
                  }}
                  onClick={() => setIsTeacherLoginModalOpen(true)}
                >
                  <div className="flex items-center gap-2 px-4 py-2">
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="text-[20px] laptop:text-[36px]"
                    />
                    <p className="text-lg font-serif laptop:text-xl">
                      Login for Faculties
                    </p>
                  </div>
                </PrimaryButton>
                <PrimaryButton
                  color={"admin"}
                  extra_styles={{
                    width: "100%",
                    border: "1.5px solid gray",
                  }}
                  className="hidden md:flex"
                  onClick={() => {
                    navigate("/admin/login");
                  }}
                >
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[20px] laptop:text-[36px] md:text-[36px]"
                    />
                    <p className="text-lg laptop:text-xl">Admin Login</p>
                  </div>
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div className="order-1 laptop:order-2 w-full tablet:w-1/2 rounded-lg overflow-hidden">
            <img src={"/school.jpg"} className="w-full" />
          </div>
        </div>
      </div>
      {/* Modal Components */}
      {isLoginModalOpen && (
        <LoginModal
          onClose={handleLoginCloseModal}
          onOpenRegister={handleOpenRegister}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterModal
          onClose={handleRegisterCloseModal}
          onOpenLogin={handleOpenLogin}
        />
      )}
      {isTeacherLoginModalOpen && (
        <TeacherLoginModal onClose={handleTeacherLoginCloseModal} />
      )}
    </div>
  );
};
