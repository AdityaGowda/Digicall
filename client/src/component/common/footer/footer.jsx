import React from "react";

export function Footer() {
  return (
    <footer className="footerContainer">
      <table>
        <tbody>
          <tr>
            <td>
              <h3>Company Information</h3>
              <p>
                <strong>About DigiCall:</strong>
                <br />
                DigiCall is your all-in-one communication solution, bringing
                together every channel you need into one seamless platform.
              </p>
              <p>
                <strong>Contact Us:</strong>
                <br />
                Email:{" "}
                <a href="mailto:support@digicall.com">support@digicall.com</a>
                <br />
                Phone: +1 (800) 123-4567
                <br />
                Address: 1234 DigiCall Lane, Suite 567, City, State, ZIP
              </p>
              <p>
                <strong>Social Media:</strong>
                <br />
                <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
                <a href="#">LinkedIn</a>
              </p>
            </td>

            <td>
              <h3>Quick Links</h3>
              <p>
                <strong>Product:</strong>
                <br />
                <a href="#">Home</a>
                <br />
                <a href="#">Features</a>
                <br />
                <a href="#">Pricing</a>
                <br />
                <a href="#">How It Works</a>
              </p>
            </td>

            <td>
              <h3>Newsletter Signup</h3>
              <p>
                <strong>Stay Connected:</strong>
                <br />
                Subscribe to our newsletter to receive the latest updates, tips,
                and special offers.
              </p>
              <form>
                <input type="email" placeholder="Enter your email" />
                <br />
                <button type="submit">Subscribe</button>
              </form>
            </td>
          </tr>

          <tr>
            <td colSpan="3">
              <p>
                © 2024 DigiCall. All rights reserved.
                <br />
                Powered by DigiCall Technology Solutions.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
}
