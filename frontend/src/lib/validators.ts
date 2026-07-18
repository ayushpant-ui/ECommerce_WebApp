import { RegisterData, RegisterError } from "@/types/auth.types";

export function validateRegister(
data: RegisterData
): RegisterError {

    const errors: RegisterError = {};

    // First Name

    if (!data.firstName.trim()) {

        errors.firstName = "First name is required.";

    }

    else if (!/^[A-Za-z]+$/.test(data.firstName)) {

        errors.firstName =
            "Only letters are allowed.";

    }

    // Last Name

    if (!data.lastName.trim()) {

        errors.lastName = "Last name is required.";

    }

    else if (!/^[A-Za-z]+$/.test(data.lastName)) {

        errors.lastName =
            "Only letters are allowed.";

    }

    // Email

    if (!data.email.trim()) {

        errors.email = "Email is required.";

    }

    else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            data.email
        )
    ) {

        errors.email =
            "Invalid email address.";

    }

    // Password

    if (!data.password) {

        errors.password =
            "Password is required.";

    }

    else if (data.password.length < 8) {

        errors.password =
            "Minimum 8 characters required.";

    }

    // Confirm Password

    if (!data.confirmPassword) {

        errors.confirmPassword =
            "Confirm your password.";

    }

    else if (
        data.password !==
        data.confirmPassword
    ) {

        errors.confirmPassword =
            "Passwords do not match.";

    }

    return errors;
}