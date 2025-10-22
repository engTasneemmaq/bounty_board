/** @format */
import { useState, useRef, useEffect } from "react";
import {
  Camera,
  Upload,
  Download,
  ChevronDown,
  FileText,
  X,
  Settings as SettingsIcon,
  Save,
} from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import { showConfirm } from "../../../utils/confirm";
import { showMessage } from "../../../utils/toast";
import CreativeButton from "../../../shared/Buttons/CreativeButton";
import CreativeCard from "../../../shared/Cards/CreativeCard";

const SectionHeader = ({ title, sub }) => (
  <div className="px-4 md:px-6 pt-6 md:pt-8 pb-4 border-b border-gray-200 bg-gradient-to-r from-blue-50/30 to-purple-50/30">
    <div className="flex items-center gap-3">
      <SettingsIcon className="w-8 h-8 text-blue-600" />
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gradient">{title}</h1>
        {sub ? <p className="text-sm text-gray-600 mt-1">{sub}</p> : null}
      </div>
    </div>
  </div>
);

const Block = ({ title, children }) => (
  <CreativeCard className="overflow-hidden">
    <div className="px-5 md:px-6 py-5">
      <h3 className="text-lg font-bold text-gradient mb-5">{title}</h3>
      {children}
    </div>
  </CreativeCard>
);

const Label = ({ children, required }) => (
  <label className="mb-2 block text-sm font-semibold text-gray-700">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

const Input = ({ className = "", error, ...props }) => (
  <>
  <input
    {...props}
      className={`h-11 w-full rounded-xl border-2 ${error ? 'border-red-500' : 'border-gray-200'} bg-white px-4 text-[15px] text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:shadow-lg focus:outline-none transition-all duration-300 ${className}`}
  />
    {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
  </>
);

const Select = ({ className = "", children, error, ...props }) => (
  <>
  <div className={`relative ${className}`}>
    <select
      {...props}
        className={`h-11 w-full appearance-none rounded-xl border-2 ${error ? 'border-red-500' : 'border-gray-200'} bg-white px-4 pr-10 text-[15px] text-gray-900 focus:border-blue-400 focus:shadow-lg focus:outline-none transition-all duration-300`}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
  </div>
    {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
  </>
);

const CountryPhoneSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const countries = [
    { code: "+1", flag: "US", name: "USA" },
    { code: "+1", flag: "CA", name: "Canada" },
    { code: "+44", flag: "GB", name: "UK" },
    { code: "+61", flag: "AU", name: "Australia" },
    { code: "+91", flag: "IN", name: "India" },
    { code: "+86", flag: "CN", name: "China" },
    { code: "+81", flag: "JP", name: "Japan" },
    { code: "+82", flag: "KR", name: "Korea" },
    { code: "+33", flag: "FR", name: "France" },
    { code: "+49", flag: "DE", name: "Germany" },
    { code: "+39", flag: "IT", name: "Italy" },
    { code: "+34", flag: "ES", name: "Spain" },
    { code: "+31", flag: "NL", name: "Netherlands" },
    { code: "+46", flag: "SE", name: "Sweden" },
    { code: "+47", flag: "NO", name: "Norway" },
    { code: "+45", flag: "DK", name: "Denmark" },
    { code: "+41", flag: "CH", name: "Switzerland" },
    { code: "+43", flag: "AT", name: "Austria" },
    { code: "+32", flag: "BE", name: "Belgium" },
    { code: "+351", flag: "PT", name: "Portugal" },
    { code: "+30", flag: "GR", name: "Greece" },
    { code: "+48", flag: "PL", name: "Poland" },
    { code: "+7", flag: "RU", name: "Russia" },
    { code: "+90", flag: "TR", name: "Turkey" },
    { code: "+20", flag: "EG", name: "Egypt" },
    { code: "+27", flag: "ZA", name: "South Africa" },
    { code: "+234", flag: "NG", name: "Nigeria" },
    { code: "+254", flag: "KE", name: "Kenya" },
    { code: "+55", flag: "BR", name: "Brazil" },
    { code: "+52", flag: "MX", name: "Mexico" },
    { code: "+54", flag: "AR", name: "Argentina" },
    { code: "+56", flag: "CL", name: "Chile" },
    { code: "+57", flag: "CO", name: "Colombia" },
    { code: "+51", flag: "PE", name: "Peru" },
    { code: "+58", flag: "VE", name: "Venezuela" },
    { code: "+966", flag: "SA", name: "Saudi Arabia" },
    { code: "+971", flag: "AE", name: "UAE" },
    { code: "+962", flag: "JO", name: "Jordan" },
    { code: "+972", flag: "PS", name: "Palestine" },
    { code: "+961", flag: "LB", name: "Lebanon" },
    { code: "+963", flag: "SY", name: "Syria" },
    { code: "+964", flag: "IQ", name: "Iraq" },
    { code: "+965", flag: "KW", name: "Kuwait" },
    { code: "+968", flag: "OM", name: "Oman" },
    { code: "+973", flag: "BH", name: "Bahrain" },
    { code: "+974", flag: "QA", name: "Qatar" },
    { code: "+967", flag: "YE", name: "Yemen" },
    { code: "+212", flag: "MA", name: "Morocco" },
    { code: "+213", flag: "DZ", name: "Algeria" },
    { code: "+216", flag: "TN", name: "Tunisia" },
    { code: "+218", flag: "LY", name: "Libya" },
    { code: "+249", flag: "SD", name: "Sudan" },
    { code: "+60", flag: "MY", name: "Malaysia" },
    { code: "+62", flag: "ID", name: "Indonesia" },
    { code: "+63", flag: "PH", name: "Philippines" },
    { code: "+65", flag: "SG", name: "Singapore" },
    { code: "+66", flag: "TH", name: "Thailand" },
    { code: "+84", flag: "VN", name: "Vietnam" },
    { code: "+880", flag: "BD", name: "Bangladesh" },
    { code: "+92", flag: "PK", name: "Pakistan" },
    { code: "+93", flag: "AF", name: "Afghanistan" },
    { code: "+98", flag: "IR", name: "Iran" },
  ];

  const selectedCountry = countries.find(c => c.code === value) || countries[37]; // Default Palestine

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-11 px-3 rounded-l-md border border-r-0 border-[#E4E7EC] bg-white flex items-center gap-2 hover:bg-[#F8FAFF] transition-colors min-w-[100px]"
      >
        <img 
          src={`https://flagcdn.com/w20/${selectedCountry.flag.toLowerCase()}.png`}
          alt={selectedCountry.name}
          className="w-5 h-4 object-cover rounded-sm"
        />
        <span className="text-[13px] font-medium text-[#101828]">{selectedCountry.code}</span>
        <ChevronDown className={`h-4 w-4 text-[#98A2B3] ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-[300px] bg-white border border-[#E4E7EC] rounded-lg shadow-lg z-50 max-h-[320px] overflow-hidden">
          {/* Search */}
          <div className="p-2 border-b border-[#E4E7EC]">
            <input
              type="text"
              placeholder="Search country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 text-[13px] border border-[#E4E7EC] rounded-md focus:outline-none focus:border-[#2A64D6]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Countries List */}
          <div className="overflow-y-auto max-h-[260px]">
            {filteredCountries.length === 0 ? (
              <div className="px-4 py-3 text-[13px] text-[#98A2B3] text-center">
                No countries found
              </div>
            ) : (
              filteredCountries.map((country, index) => (
                <button
                  key={`${country.code}-${country.name}-${index}`}
                  type="button"
                  onClick={() => {
                    onChange(country.code);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className={`w-full px-4 py-2.5 flex items-center gap-3 text-left hover:bg-[#F8FAFF] transition-colors ${
                    country.code === value && country.name === selectedCountry.name ? 'bg-[#EEF3FF]' : ''
                  }`}
                >
                  <img 
                    src={`https://flagcdn.com/w40/${country.flag.toLowerCase()}.png`}
                    alt={country.name}
                    className="w-6 h-4 object-cover rounded-sm"
                  />
                  <span className="text-[13px] text-[#101828]">{country.name}</span>
                  <span className="text-[13px] text-[#667085] ml-auto font-medium">{country.code}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
  </div>
);
};

/* ======== الصفحة ======== */
export default function Settings() {
  const { user } = useAuth();
  const { updateUser } = useAuth();

  // Profile Information State
  const [profileImage, setProfileImage] = useState(user?.avatar || null);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [primaryEmail, setPrimaryEmail] = useState(user?.email || "");
  const [secondaryEmail, setSecondaryEmail] = useState(user?.secondaryEmail || "");
  const [phoneCode, setPhoneCode] = useState(user?.phoneCode || "+972");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");

  // Professional Information State
  const [jobTitle, setJobTitle] = useState(user?.jobTitle || "");
  const [currentPosition, setCurrentPosition] = useState(user?.currentPosition || "");
  const [yearsOfExperience, setYearsOfExperience] = useState(user?.yearsOfExperience || "5");
  const [education, setEducation] = useState(user?.education || "");
  const [skills, setSkills] = useState(user?.skills || ["JavaScript", "React"]);
  const [skillInput, setSkillInput] = useState("");
  const [languages, setLanguages] = useState(user?.languages || ["English", "Spanish"]);
  const [languageInput, setLanguageInput] = useState("");
  const [personalWebsite, setPersonalWebsite] = useState(user?.website || "");
  const [linkedinUrl, setLinkedinUrl] = useState(user?.linkedinUrl || "");
  const [cvFile, setCvFile] = useState({ name: user?.fullName || "Your CV", type: "PDF" });

  // Personal Information State
  const [dateOfBirth, setDateOfBirth] = useState(user?.dateOfBirth || "");
  const [gender, setGender] = useState(user?.gender || "Male");
  const [maritalStatus, setMaritalStatus] = useState(user?.maritalStatus || "Single");
  const [nationality, setNationality] = useState(user?.nationality || "");
  const [country, setCountry] = useState(user?.country || "");
  const [bio, setBio] = useState(user?.biography || "");

  // Update state when user data changes
  useEffect(() => {
    if (user) {
      setProfileImage(user.avatar || null);
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setPrimaryEmail(user.email || "");
      setSecondaryEmail(user.secondaryEmail || "");
      setPhoneCode(user.phoneCode || "+972");
      setPhoneNumber(user.phoneNumber || "");
      setJobTitle(user.jobTitle || "");
      setCurrentPosition(user.currentPosition || "");
      setYearsOfExperience(user.yearsOfExperience || "5");
      setEducation(user.education || "");
      setSkills(user.skills || ["JavaScript", "React"]);
      setLanguages(user.languages || ["English", "Spanish"]);
      setPersonalWebsite(user.website || "");
      setLinkedinUrl(user.linkedinUrl || "");
      setDateOfBirth(user.dateOfBirth || "");
      setGender(user.gender || "Male");
      setMaritalStatus(user.maritalStatus || "Single");
      setNationality(user.nationality || "");
      setCountry(user.country || "");
      setBio(user.biography || "");
    }
  }, [user]);

  // Password State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Refs for file inputs
  const imageInputRef = useRef(null);
  const cvInputRef = useRef(null);

  // Errors State
  const [errors, setErrors] = useState({});

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        showMessage.error('File size must be less than 5MB');
        return;
      }
      
      // Check file type
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        showMessage.error('Only JPG and PNG files are allowed');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        showMessage.success('Profile photo uploaded successfully! 📸');
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle CV Upload
  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        showMessage.error('File size must be less than 10MB');
        return;
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        showMessage.error('Only PDF, DOC, and DOCX files are allowed');
        return;
      }

      const fileType = file.name.split('.').pop().toUpperCase();
      setCvFile({ name: file.name, type: fileType });
      showMessage.success('CV/Resume uploaded successfully! 📄');
    }
  };

  // Handle CV Download
  const handleCvDownload = () => {
    showMessage.info(`Downloading ${cvFile.name}.${cvFile.type}...`);
    console.log('Download CV:', cvFile);
  };

  // Handle Add Skill
  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
        setSkillInput('');
      }
    }
  };

  // Handle Remove Skill
  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  // Handle Add Language
  const handleAddLanguage = (e) => {
    if (e.key === 'Enter' && languageInput.trim()) {
      e.preventDefault();
      if (!languages.includes(languageInput.trim())) {
        setLanguages([...languages, languageInput.trim()]);
        setLanguageInput('');
      }
    }
  };

  // Handle Remove Language
  const handleRemoveLanguage = (langToRemove) => {
    setLanguages(languages.filter(lang => lang !== langToRemove));
  };

  // Validate Form
  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!primaryEmail.trim()) {
      newErrors.primaryEmail = 'Primary email is required';
    } else if (!/\S+@\S+\.\S+/.test(primaryEmail)) {
      newErrors.primaryEmail = 'Invalid email format';
    }

    if (secondaryEmail && !/\S+@\S+\.\S+/.test(secondaryEmail)) {
      newErrors.secondaryEmail = 'Invalid email format';
    }

    if (personalWebsite && !personalWebsite.startsWith('http')) {
      newErrors.personalWebsite = 'URL must start with http:// or https://';
    }

    if (linkedinUrl && !linkedinUrl.startsWith('http')) {
      newErrors.linkedinUrl = 'URL must start with http:// or https://';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Save Changes
  const handleSaveChanges = () => {
    if (!validateForm()) {
      showMessage.error('Please fix the errors before saving');
      return;
    }

    const formData = {
      avatar: profileImage,
      firstName,
      lastName,
      email: primaryEmail,
      secondaryEmail,
      phoneCode,
      phoneNumber,
      jobTitle,
      currentPosition,
      yearsOfExperience,
      education,
      skills,
      languages,
      website: personalWebsite,
      linkedinUrl,
      cvFile,
      dateOfBirth,
      gender,
      maritalStatus,
      nationality,
      country,
      biography: bio,
    };

    // Update user in AuthContext
    const result = updateUser(formData);
    
    if (result.success) {
      console.log('Settings saved successfully:', result.user);
      showMessage.success('Settings saved successfully! ✨');
    } else {
      showMessage.error('Failed to save settings');
    }
  };

  // Handle Cancel
  const handleCancel = async () => {
    const confirmed = await showConfirm({
      title: '⚠️ Discard Changes',
      message: 'Are you sure you want to discard all changes?',
      type: 'warning',
      okText: 'Yes, Discard',
      cancelText: 'Keep Editing'
    });
    if (confirmed) {
      // Reset all fields to initial state
      setFirstName('');
      setLastName('');
      setPrimaryEmail('');
      setSecondaryEmail('');
      setPhoneNumber('');
      setJobTitle('');
      setCurrentPosition('');
      setEducation('');
      setPersonalWebsite('');
      setLinkedinUrl('');
      setDateOfBirth('');
      setNationality('');
      setCountry('');
      setBio('');
      setErrors({});
      showMessage.info('Changes discarded');
    }
  };

  // Handle Change Password
  const handleChangePassword = () => {
    if (!currentPassword) {
      showMessage.error('Please enter your current password');
      return;
    }
    if (!newPassword) {
      showMessage.error('Please enter a new password');
      return;
    }
    if (newPassword.length < 8) {
      showMessage.error('New password must be at least 8 characters long');
      return;
    }

    console.log('Changing password...');
    showMessage.success('Password changed successfully! 🔒');
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className="w-full">
      {/* Hidden file inputs */}
      <input
        ref={imageInputRef}
        type="file"
        accept="image/jpeg,image/png"
        onChange={handleImageUpload}
        className="hidden"
      />
      <input
        ref={cvInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleCvUpload}
        className="hidden"
      />

      {/* الهيدر */}
      <SectionHeader
        title="Settings"
        sub="Manage your account information and preferences"
      />

      {/* جسم الصفحة */}
      <div className="mx-auto max-w-[1160px] px-4 md:px-6 py-6 md:py-8 space-y-6">
        {/* Profile Information */}
        <Block title="Profile Information">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px,1fr]">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="relative">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="h-[160px] w-[160px] rounded-full object-cover border border-[#E6EEF9]"
                  />
                ) : (
              <div className="grid h-[160px] w-[160px] place-items-center rounded-full border border-[#E6EEF9] bg-[#F8FAFF] text-[12px] text-[#98A2B3]">
                No Image
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#0A65CC] px-3 py-1.5 text-[12px] font-medium text-white hover:bg-[#0854B3] transition-colors"
              >
                <Camera className="h-4 w-4" /> Change Photo
              </button>
              <div className="mt-1 text-[11px] text-[#98A2B3]">JPG, PNG up to 5MB</div>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label required>First Name</Label>
                <Input 
                  placeholder="First name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  error={errors.firstName}
                />
              </div>
              <div>
                <Label required>Last Name</Label>
                <Input 
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  error={errors.lastName}
                />
              </div>

              <div>
                <Label required>Primary Email</Label>
                <Input 
                  type="email"
                  placeholder="name@email.com"
                  value={primaryEmail}
                  onChange={(e) => setPrimaryEmail(e.target.value)}
                  error={errors.primaryEmail}
                  readOnly
                  disabled
                  className="bg-gray-100 cursor-not-allowed"
                  title="Primary email cannot be changed"
                />
                <span className="text-xs text-gray-500 mt-1 block">Primary email cannot be changed</span>
              </div>
              <div>
                <Label>Secondary Email</Label>
                <Input 
                  type="email"
                  placeholder="Optional email"
                  value={secondaryEmail}
                  onChange={(e) => setSecondaryEmail(e.target.value)}
                  error={errors.secondaryEmail}
                />
              </div>

              {/* Phone Number */}
              <div className="md:col-span-2">
                <Label>Phone Number</Label>
                <div className="flex">
                  <CountryPhoneSelect
                    value={phoneCode}
                    onChange={setPhoneCode}
                  />
                  <Input
                    placeholder="Phone number.."
                    className="rounded-l-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Block>

        {/* Professional Information */}
        <Block title="Professional Information">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Job Title</Label>
              <Input 
                placeholder="e.g. Frontend Developer"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div>
              <Label>Current Position</Label>
              <Input 
                placeholder="e.g. Senior Engineer"
                value={currentPosition}
                onChange={(e) => setCurrentPosition(e.target.value)}
              />
            </div>

            <div>
              <Label>Years of Experience</Label>
              <Select 
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(e.target.value)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </Select>
            </div>
            <div>
              <Label>Education</Label>
              <Input 
                placeholder="e.g. B.Sc. Computer Science"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>

            <div>
              <Label>Skills</Label>
              <div className="rounded-md border border-[#E4E7EC] p-2">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#EEF3FF] px-2.5 py-1 text-[12px] font-medium text-[#2A64D6] shadow-[inset_0_0_0_1px_#CFE0F6] flex items-center gap-1"
                    >
                      {skill}
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="hover:text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  className="mt-1 w-full border-0 p-0 text-[13px] placeholder:text-[#98A2B3] focus:outline-none"
                  placeholder="Type and press Enter to add skills..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleAddSkill}
                />
              </div>
            </div>
            <div>
              <Label>Languages</Label>
              <div className="rounded-md border border-[#E4E7EC] p-2">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-[#EEF3FF] px-2.5 py-1 text-[12px] font-medium text-[#2A64D6] shadow-[inset_0_0_0_1px_#CFE0F6] flex items-center gap-1"
                    >
                      {lang}
                      <button
                        onClick={() => handleRemoveLanguage(lang)}
                        className="hover:text-red-500"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  className="mt-1 w-full border-0 p-0 text-[13px] placeholder:text-[#98A2B3] focus:outline-none"
                  placeholder="Type and press Enter to add languages..."
                  value={languageInput}
                  onChange={(e) => setLanguageInput(e.target.value)}
                  onKeyDown={handleAddLanguage}
                />
              </div>
            </div>

            <div>
              <Label>Personal Website</Label>
              <Input 
                placeholder="https://your.site"
                value={personalWebsite}
                onChange={(e) => setPersonalWebsite(e.target.value)}
                error={errors.personalWebsite}
              />
            </div>
            <div>
              <Label>LinkedIn URL</Label>
              <Input 
                placeholder="https://linkedin.com/in/username"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                error={errors.linkedinUrl}
              />
            </div>

            {/* CV/Resume */}
            <div className="md:col-span-2">
              <Label>CV/Resume</Label>
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-md border border-[#E4E7EC] bg-[#F8FAFF] px-3 py-2 text-[12px]">
                  <FileText className="h-4 w-4 text-[#667085]" />
                  <div>
                    <div className="font-medium">{cvFile.name}</div>
                    <div className="text-[#98A2B3]">{cvFile.type}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCvDownload}
                  className="grid h-9 w-9 place-items-center rounded-md border border-[#E4E7EC] bg-white text-[#0A65CC] hover:bg-[#F8FAFF] transition-colors"
                  title="Download"
                >
                  <Download className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => cvInputRef.current?.click()}
                  className="inline-flex items-center gap-2 rounded-md border border-[#E4E7EC] bg-white px-3 py-2 text-[12px] text-[#101828] hover:bg-[#F8FAFF] transition-colors"
                >
                  <Upload className="h-4 w-4" />
                  Change File
                </button>
                <div className="text-[11px] text-[#98A2B3]">
                  PDF, DOC, DOCX up to 10MB
                </div>
              </div>
            </div>
          </div>
        </Block>

        {/* Personal Information */}
        <Block title="Personal Information">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Date of Birth</Label>
              <Input 
                type="date"
                placeholder="mm/dd/yyyy"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div>
              <Label>Gender</Label>
              <Select 
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </div>

            <div>
              <Label>Marital Status</Label>
              <Select 
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </Select>
            </div>
            <div>
              <Label>Nationality</Label>
              <Input 
                placeholder="e.g. Jordanian"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>

            <div>
              <Label>Country</Label>
              <Input 
                placeholder="e.g. Jordan"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Label>Bio</Label>
              <textarea
                rows={6}
                className="w-full rounded-md border border-[#E4E7EC] bg-white p-3 text-[13px] text-[#101828] placeholder:text-[#98A2B3] focus:border-[#2A64D6] focus:outline-none"
                placeholder="Tell us about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>
        </Block>

        {/* Change Password */}
        <Block title="Change Password">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,1fr,110px]">
            <div>
              <Label>Current Password</Label>
              <Input 
                type="password" 
                placeholder="••••••••"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <Label>New Password</Label>
              <Input 
                type="password" 
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <CreativeButton
                variant="primary"
                size="md"
                onClick={handleChangePassword}
                className="w-full h-11"
              >
                Change
              </CreativeButton>
            </div>
          </div>
        </Block>

        {/* Bottom actions */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <CreativeButton
            variant="outline"
            size="md"
            onClick={handleCancel}
            className="h-11 px-6"
          >
            Cancel
          </CreativeButton>
          <CreativeButton
            variant="success"
            size="md"
            onClick={handleSaveChanges}
            className="h-11 px-8 flex items-center gap-2"
          >
            <Save size={18} />
            Save Changes
          </CreativeButton>
        </div>
      </div>
    </div>
  );
}
