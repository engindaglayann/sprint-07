import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [sent, setSent] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const found: { email?: string; password?: string } = {};

        if (!email.includes("@")) {
            found.email = "Geçerli bir e-posta adresi girin.";
        }
        if (password.length < 6) {
            found.password = "Şifre en az 6 karakter olmalı.";
        }

        setErrors(found);
        setSent(Object.keys(found).length === 0);
    }

    return (
        <>
            <h2 className="bolum-baslik">Giriş Yap</h2>
            <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="alan">
                    <label htmlFor="email">E-posta</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={errors.email ? true : undefined}
                    />
                    <span className="hata-metni">{errors.email}</span>
                </div>

                <div className="alan">
                    <label htmlFor="password">Şifre</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-invalid={errors.password ? true : undefined}
                    />
                    <span className="hata-metni">{errors.password}</span>
                </div>

                <div className="form-butonlar">
                    <button type="submit" className="buton">
                        Giriş Yap
                    </button>
                </div>

                {sent && (
                    <div className="mesaj mesaj-basari">
                        <p>Gerçek giriş Sprint 10'da.</p>
                    </div>
                )}

                <div className="form-baglantilar">
                    <Link to="/forgot-password">Şifremi unuttum</Link>
                    <Link to="/register">Kayıt ol</Link>
                </div>
            </form>
        </>
    );
}

export default LoginPage;
