import { Box, Button, Stack } from '@mui/material';
import PersonalInformation from './PersonalInformation';
import ContactInformation from './ContactInformation';
import { useContext, useEffect, useState } from 'react';
import CustomBtn from './CustomBtn';
import { MyContext } from '../context/DrawerState';
import checkValidation from '../utils/checkValidation';
import showValidationToast from '../utils/completeFields';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import showUpdateToast from '../utils/swalUpdateToast';
const contactRgx = /^(\d\s*)+$/;
const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PersonalDetails = () => {
  const {
    ProfileData: { id },
    location,
    userType,
    email,
    contact,
    getProfileData,
    ProfileData,
    isMediumScreen,
     name,
        fatherName,
        bio,
        url, 
        address
  } = useContext(MyContext);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [submitAttemp, setSubmitAttemp] = useState(false);

  const regextTest = (rgx, val) => {
    return rgx.test(val);
  };

  useEffect(() => {
    const newErrors = {};
    if (!name) newErrors.name = 'Please enter your full name';
    if (!fatherName) newErrors.fatherName = "Please enter your father's name";
    if (!bio) newErrors.bio = 'Please provide a short bio about yourself';
    if (!address) newErrors.address = 'Please enter your address';
    if (!location) newErrors.location = 'Please select your location';
    if (!userType) newErrors.userType = 'Please select your user type';
    if (!email) newErrors.email = 'Please enter your email address';
    if (!contact) newErrors.contact = 'Please enter your contact number';

    setValidationErrors(newErrors);
  }, [name, fatherName, bio, url, address, location, userType, email, contact]);

  const updatePersonalData = async () => {
    setSubmitAttemp(true);
    if (!checkValidation(validationErrors)) {
      showValidationToast('Please complete all fields!');
      return;
    }
    if (!regextTest(contactRgx, contact.trim())) {
      showValidationToast('Enter a valid contact number (digits only)');
      return;
    }

    if (!regextTest(emailRgx, email.trim())) {
      showValidationToast('Enter a valid email like name@example.com');
      return;
    }
    setSubmitLoading(true);
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${location.toLowerCase()}?fullText=true&fields=idd`
    );
    const [country] = await response.json();

    const dialCode =
      (country.idd?.root || '') + (country.idd?.suffixes?.[0] || '');

    const contactWithCode = `(${dialCode}) ${contact.trim()}`;
    let newProfile = {
      name,
      fatherName,
      bio,
      address,
      url,
      email,
      contactWithCode,
      location,
      userType,
    };

    const prodDoc = doc(db, 'personal-Info', id);
    await updateDoc(prodDoc, newProfile);
    getProfileData();

    setSubmitLoading(false);
    showUpdateToast('Updated!', 'Your profile has been updated.');
  };

  return (
    <Box>
      <Stack width="100%" direction={isMediumScreen?'column':"row"} spacing={2}>
        <PersonalInformation
          validationErrors={validationErrors}
          submitAttemp={submitAttemp}
        />

        <ContactInformation
          regextTest={regextTest}
          contactRgx={contactRgx}
          emailRgx={emailRgx}
          validationErrors={validationErrors}
          submitAttemp={submitAttemp}
        />
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
        <CustomBtn
          contnt="Update Profile"
          submitLoading={submitLoading}
          handleClick={updatePersonalData}
        />
      </Box>
    </Box>
  );
};

export default PersonalDetails;
