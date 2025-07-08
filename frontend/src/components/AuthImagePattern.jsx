const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
            <div className="max-w-md w-full text-center space-y-8">
                {/* Animated Glow Circles */}
                <div className="relative flex justify-center items-center h-64">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-${24 + i * 12} h-${24 + i * 12} rounded-full border border-primary/20 animate-ping delay-${i * 200}`}
                            style={{
                                animationDuration: `${2 + i}s`,
                            }}
                        />
                    ))}
                    <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-primary text-5xl font-bold animate-pulse ">✨</span>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl font-extrabold text-primary-content">{title}</h2>

                {/* Subtitle */}
                <p className="text-base-content/60 text-sm leading-relaxed">{subtitle}</p>
            </div>
        </div>
    );
};

export default AuthImagePattern;
