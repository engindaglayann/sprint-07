import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const found = email.includes("@") ? "" : "Geçerli bir e-posta girin.";
        setError(found);
        setSent(found === "");
    }

    return (
        <>
            <h2 className="bolum-baslik">Şifremi Unuttum</h2>
            <p>Şifrenizi sıfırlamak için kayıtlı e-posta adresinizi girin.</p>
            <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="alan">
                    <label htmlFor="email">E-posta</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={error ? true : undefined}
                    />
                    <span className="hata-metni">{error}</span>
                </div>

                <div className="form-butonlar">
                    <button type="submit" className="buton">
                        Sıfırlama Bağlantısı Gönder
                    </button>
                </div>

                {sent && (
                    <div className="mesaj mesaj-basari">
                        <p>Bağlantı {email} adresine gönderildi (demo).</p>
                    </div>
                )}

                <div className="form-baglantilar">
                    <Link to="/login">&larr; Girişe dön</Link>
                </div>
            </form>
        </>
    );
}

export default ForgotPasswordPage;
