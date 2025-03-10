import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
    StyledFloatingLabel,
    StyledInput,
    StyledSelect,
    StyledCheck,
    ErrorText
} from "./BuyerInfo.element";

const BuyerInfo = forwardRef(({ formData, setFormData }, ref) => {

    // Validation errors state
    const [errors, setErrors] = useState({});

    // Define state for API data
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    // 🔥 Refs for input fields (Auto-Focus on first error)
    const inputRefs = {
        fullName: useRef(null),
        email: useRef(null),
        phone: useRef(null),
        province: useRef(null),
        district: useRef(null),
        ward: useRef(null),
        companyName: useRef(null),
        taxId: useRef(null),
        companyAddress: useRef(null),
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
                provinceName: selectedProvince ? selectedProvince.name : "", // Store province name
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
                districtName: selectedDistrict ? selectedDistrict.name : "",
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
                wardName: selectedWard ? selectedWard.name : "",
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

        if (!formData.fullName.trim()) newErrors.fullName = "Họ và tên là bắt buộc";
        if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Số điện thoại sai định dạng";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email không hợp lệ";
        if (!formData.province) newErrors.province = "Vui lòng chọn tỉnh/thành phố";
        if (!formData.district) newErrors.district = "Vui lòng chọn quận/huyện";
        if (!formData.ward) newErrors.ward = "Vui lòng chọn phường/xã";
        if (!formData.companyName.trim()) newErrors.companyName = "Tên công ty là bắt buộc";
        if (!formData.companyAddress.trim()) newErrors.companyAddress = "Địa chỉ đăng ký kinh doanh là bắt buộc";

        if (!formData.taxId.match(/^\d{10}$|^\d{10}-\d{3}$/)) {
            newErrors.taxId = "Mã số thuế sai định dạng";
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
        <Container>
            <Form>
                <Row className="mb-4">
                    <Col>
                        <StyledFloatingLabel controlId="buyerFullName" label="Họ và tên">
                            <StyledInput
                                ref={inputRefs.fullName}
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder=" "
                            />
                            {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
                        </StyledFloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-4 g-5">
                    <Col>
                        <StyledFloatingLabel controlId="buyerEmail" label="Email">
                            <StyledInput
                                ref={inputRefs.email}
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder=" "
                            />
                            {errors.email && <ErrorText>{errors.email}</ErrorText>}
                        </StyledFloatingLabel>
                        
                    </Col>

                    <Col>
                        <StyledFloatingLabel controlId="buyerPhone" label="Số điện thoại">
                            <StyledInput
                                ref={inputRefs.phone}
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
                                maxLength={10}
                                placeholder=" "
                            />
                            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                        </StyledFloatingLabel>
                    </Col>
                </Row>

                {/* Province Select */}
                <Row className="mb-4">
                    <Col>
                        <StyledFloatingLabel controlId="buyerProvince" label="Tỉnh/Thành phố">
                            <StyledSelect 
                                ref={inputRefs.province}
                                name="province" 
                                value={formData.province} 
                                onChange={handleChange}
                            >
                                <option value="">Chọn tỉnh/thành phố</option>
                                {provinces.map((prov) => (
                                    <option key={prov.code} value={prov.code}>
                                        {prov.name_with_type}
                                    </option>
                                ))}
                            </StyledSelect>
                            {errors.province && <ErrorText>{errors.province}</ErrorText>}
                        </StyledFloatingLabel>
                    </Col>
                </Row>

                {/* District Select */}
                <Row className="mb-4">
                    <Col>
                        <StyledFloatingLabel controlId="buyerDistrict" label="Quận/Huyện">
                            <StyledSelect 
                                ref={inputRefs.district}
                                name="district" 
                                value={formData.district} 
                                onChange={handleChange} 
                                disabled={!formData.province}
                            >
                                <option value="">Chọn quận/huyện</option>
                                {districts.map((dist) => (
                                    <option key={dist.code} value={dist.code}>
                                        {dist.name_with_type}
                                    </option>
                                ))}
                            </StyledSelect>
                            {errors.district && <ErrorText>{errors.district}</ErrorText>}
                        </StyledFloatingLabel>
                    </Col>
                </Row>

                {/* Ward Select */}
                <Row className="mb-4">
                    <Col>
                        <StyledFloatingLabel controlId="buyerWard" label="Phường/Xã">
                            <StyledSelect 
                                ref={inputRefs.ward}
                                name="ward" 
                                value={formData.ward} 
                                onChange={handleChange} 
                                disabled={!formData.district}
                            >
                                <option value="">Chọn phường/xã</option>
                                {wards.map((ward) => (
                                    <option key={ward.code} value={ward.code}>
                                        {ward.name_with_type}
                                    </option>
                                ))}
                            </StyledSelect>
                            {errors.ward && <ErrorText>{errors.ward}</ErrorText>}
                        </StyledFloatingLabel>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <StyledCheck
                            label="Xuất hóa đơn"
                            name="invoiceRequired"
                            checked={formData.invoiceRequired}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>

                <Row className="mb-4 g-5">
                    <Col>
                        <StyledFloatingLabel controlId="companyName" label="Tên công ty">
                            <StyledInput
                                ref={inputRefs.companyName}
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder=" "
                            />
                            {errors.companyName && <ErrorText>{errors.companyName}</ErrorText>}
                        </StyledFloatingLabel>
                    </Col>

                    <Col>
                        <StyledFloatingLabel controlId="companyTaxId" label="Mã số thuế">
                            <StyledInput
                                ref={inputRefs.taxId}
                                type="text"
                                name="taxId"
                                value={formData.taxId}
                                onChange={handleChange}
                                placeholder=" "
                            />
                            {errors.taxId && <ErrorText>{errors.taxId}</ErrorText>}
                        </StyledFloatingLabel>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <StyledFloatingLabel controlId="companyAddress" label="Địa chỉ đăng kí kinh doanh">
                            <StyledInput
                                ref={inputRefs.companyAddress}
                                type="text"
                                name="companyAddress"
                                value={formData.companyAddress}
                                onChange={handleChange}
                                placeholder=" "
                            />
                            {errors.companyAddress && <ErrorText>{errors.companyAddress}</ErrorText>}
                        </StyledFloatingLabel>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
});

export default BuyerInfo;
