import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { Form, FloatingLabel } from "react-bootstrap";


const BuyerInfo = forwardRef(({ formData, setFormData }, ref) => {

    // Validation errors state
    const [errors, setErrors] = useState({});

    // Define state for API data
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    // 🔥 Refs for input fields (Auto-Focus on first error)
    const inputRefs = {
        name: useRef(null),
        email: useRef(null),
        phone: useRef(null),
        province: useRef(null),
        district: useRef(null),
        ward: useRef(null),
        company: useRef(null),
        tax: useRef(null),
        address: useRef(null),
    };

    // Fetch provinces on component mount
    useEffect(() => {
        fetch("https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1")
            .then((res) => res.json())
            .then((data) => setProvinces(data.data.data) )
            .catch((err) => console.error("Error fetching provinces:", err));
    }, []);

    // Fetch districts when province changes
    useEffect(() => {
        if (formData.province) {
            fetch(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${formData.province}&limit=-1`)
                .then((res) => res.json())
                .then((data) => setDistricts(data.data.data))
                .catch((err) => console.error("Error fetching districts:", err));
        } else {
            setDistricts([]);
            setWards([]);
        }
    }, [formData.province]);

    // Fetch wards when district changes
    useEffect(() => {
        if (formData.district) {
            fetch(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${formData.district}&limit=-1`)
                .then((res) => res.json())
                .then((data) => setWards(data.data.data))
                .catch((err) => console.error("Error fetching wards:", err));
        } else {
            setWards([]);
        }
    }, [formData.district]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "province") {
            const selectedProvince = provinces.find((prov) => prov.code === value);
            setFormData({
                ...formData,
                city: selectedProvince ? selectedProvince.name : "", // Store province name
                province: value, // Keep track of province code separately
                district: "",
                ward: "",
            });
            setDistricts([]);
            setWards([]);
            return;
        }
    
        if (name === "district") {
            const selectedDistrict = districts.find((dist) => dist.code === value);
            setFormData({
                ...formData,
                district: selectedDistrict ? selectedDistrict.name : "",
                district: value,
                ward: "",
            });
            setWards([]);
            return;
        }
    
        if (name === "ward") {
            const selectedWard = wards.find((ward) => ward.code === value);
            setFormData({
                ...formData,
                commune: selectedWard ? selectedWard.name : "",
                ward: value,
            });
            return;
        }
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };
    

    // Validate form fields
    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Họ và tên là bắt buộc";
        if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Số điện thoại sai định dạng";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email không hợp lệ";
        if (!formData.province) newErrors.province = "Vui lòng chọn tỉnh/thành phố";
        if (!formData.district) newErrors.district = "Vui lòng chọn quận/huyện";
        if (!formData.ward) newErrors.ward = "Vui lòng chọn phường/xã";
        if (!formData.company.trim()) newErrors.company = "Tên công ty là bắt buộc";
        if (!formData.address.trim()) newErrors.address = "Địa chỉ đăng ký kinh doanh là bắt buộc";

        if (!formData.tax.match(/^\d{10}$|^\d{10}-\d{3}$/)) {
            newErrors.tax = "Mã số thuế sai định dạng";
        }

        setErrors(newErrors);

        // Focus on the first invalid field
        const firstInvalidField = Object.keys(newErrors)[0];
        if (firstInvalidField && inputRefs[firstInvalidField].current) {
            inputRefs[firstInvalidField].current.focus();
        }
        
        return Object.keys(newErrors).length === 0;
    };

    useImperativeHandle(ref, () => ({
        validate: () => validate(), 
    }));

    return (
        <Form >
            <div className="row row-gap-3 w-5 m-0">
                <div>
                    <FloatingLabel controlId="buyerFullName" label="Họ và tên">
                        <Form.Control
                            ref={inputRefs.name}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder=" "
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </FloatingLabel>
                </div>
                <div className="w-50">
                    <FloatingLabel controlId="buyerEmail" label="Email">
                        <Form.Control
                            ref={inputRefs.email}
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=" "
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </FloatingLabel>
                    
                </div>
                <div className="w-50">
                    <FloatingLabel controlId="buyerPhone" label="Số điện thoại">
                        <Form.Control
                            ref={inputRefs.phone}
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
                            maxLength={10}
                            placeholder=" "
                            isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                    </FloatingLabel>
                </div>
                <div>
                    <FloatingLabel controlId="buyerProvince" label="Tỉnh/Thành phố">
                        <Form.Select 
                            ref={inputRefs.province}
                            name="province" 
                            value={formData.province} 
                            onChange={handleChange}
                            isInvalid={!!errors.province}
                        >
                            <option value="">Chọn tỉnh/thành phố</option>
                            {provinces.map((prov) => (
                                <option key={prov.code} value={prov.code}>
                                    {prov.name_with_type}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">{errors.province}</Form.Control.Feedback>
                    </FloatingLabel>
                </div>
                <div>
                    <FloatingLabel controlId="buyerDistrict" label="Quận/Huyện">
                        <Form.Select 
                            ref={inputRefs.district}
                            name="district" 
                            value={formData.district} 
                            onChange={handleChange}
                            isInvalid={!!errors.district}
                            disabled={!formData.province}
                        >
                            <option value="">Chọn quận/huyện</option>
                            {districts.map((dist) => (
                                <option key={dist.code} value={dist.code}>
                                    {dist.name_with_type}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
                    </FloatingLabel>
                </div>
                <div>
                    <FloatingLabel controlId="buyerWard" label="Phường/Xã">
                        <Form.Select 
                            ref={inputRefs.ward}
                            name="ward" 
                            value={formData.ward} 
                            onChange={handleChange}
                            isInvalid={!!errors.ward}
                            disabled={!formData.district}
                        >
                            <option value="">Chọn phường/xã</option>
                            {wards.map((ward) => (
                                <option key={ward.code} value={ward.code}>
                                    {ward.name_with_type}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">{errors.ward}</Form.Control.Feedback>
                    </FloatingLabel>
                </div>
                <div>
                    <Form.Check
                        label="Xuất hóa đơn"
                        name="invoice"
                        checked={formData.invoice}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-50">
                    <FloatingLabel controlId="company" label="Tên công ty">
                        <Form.Control
                            ref={inputRefs.company}
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder=" "
                            isInvalid={!!errors.company}
                        />
                        <Form.Control.Feedback type="invalid">{errors.company}</Form.Control.Feedback>
                    </FloatingLabel>
                </div>
                <div className="w-50">
                    <FloatingLabel controlId="companyTaxId" label="Mã số thuế">
                        <Form.Control
                            ref={inputRefs.tax}
                            type="text"
                            name="tax"
                            value={formData.tax}
                            onChange={handleChange}
                            placeholder=" "
                            isInvalid={!!errors.tax}
                        />
                        <Form.Control.Feedback type="invalid">{errors.tax}</Form.Control.Feedback>
                    </FloatingLabel>
                </div>
                <div>
                    <FloatingLabel controlId="address" label="Địa chỉ đăng kí kinh doanh">
                        <Form.Control
                            ref={inputRefs.address}
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder=" "
                            isInvalid={!!errors.address}
                        />
                        <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                    </FloatingLabel>
                </div>
            
        </div>
        </Form>
    );
});

export default BuyerInfo;
