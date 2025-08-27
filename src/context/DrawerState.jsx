import { createContext, useEffect, useState } from 'react';
import saveToLocalStorage from '../utils/saveToLocalStorage';
import getFromLocalStorage from '../utils/getFromLocalStorage';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import asiaList from '../utils/countriesList';
import { useMediaQuery } from '@mui/material';

export const MyContext = createContext();

const locations = asiaList;

const DrawerProvider = ({ children }) => {
  const isSmallScreen = useMediaQuery("(max-width:599px)");
  const isMediumScreen = useMediaQuery("(max-width:899px)");
  const storedDrawer = getFromLocalStorage('drawerOpen');
  const storedTheme = getFromLocalStorage('isDark');
  const [isDrawerOpen, setIsDrawerOpen] = useState(
    typeof storedDrawer === 'boolean' ? storedDrawer : isSmallScreen?false:true
  );

  const [isDark, setIsDark] = useState(
    typeof storedTheme === 'boolean' ? storedTheme : false
  );
  const [userType, setUserType] = useState('');

  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [bio, setBio] = useState('');
  const [url, setUrl] = useState('');
  const [address, setAddress] = useState('');

  const [ProfileData, setProfileData] = useState({});
  const empCollectionRef = collection(db, 'personal-Info');
  const getProfileData = async () => {
    try {
      const data = await getDocs(empCollectionRef);
      let formattedtData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      let finalData = formattedtData[0];
      let bracketIdx = finalData.contactWithCode.indexOf(')');
      setProfileData(finalData);
      setUserType(finalData.userType);
      setLocation(finalData.location);
      setEmail(finalData.email);
      setContact(finalData.contactWithCode.slice(bracketIdx + 1).trim());
      setName(finalData.name)
      setFatherName(finalData.fatherName)
      setBio(finalData.bio)
      setUrl(finalData.url)
      setAddress(finalData.address)
    } catch (error) {
      console.log('Faled getching profile Data' + error);
    }
  };


  useEffect(() => {
    getProfileData();

  }, []);

  const handleLocation = (newValue) => {
    setLocation(newValue);
  };

  const handleUserType = (newValue) => {
    setUserType(newValue);
  };
  useEffect(() => {
    saveToLocalStorage('drawerOpen', isDrawerOpen);
  }, [isDrawerOpen]);
  useEffect(() => {
    saveToLocalStorage('isDark', isDark);
  }, [isDark]);
  return (
    <MyContext.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen,
        getProfileData,
        isDark,
        setIsDark,
        userType,
        handleUserType,
        locations,
        location,
        handleLocation,
        ProfileData,
        setProfileData,
        email,
        setEmail,
        contact,
        setContact,
        isSmallScreen,
        isMediumScreen,
        name,
        setName,
        fatherName,
        setFatherName,
        bio,
        setBio,
        url, 
        setUrl,
        address,
        setAddress
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default DrawerProvider;
