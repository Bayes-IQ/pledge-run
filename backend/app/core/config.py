from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "PledgeRun"
    DEBUG: bool = True
    DATABASE_URL: str = "postgresql://pledgerun:pledgerun@localhost:5432/pledgerun"
    SECRET_KEY: str = "dev-secret-change-in-production"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    STRIPE_SECRET_KEY: str = ""
    STRIPE_WEBHOOK_SECRET: str = ""
    STRIPE_PUBLISHABLE_KEY: str = ""
    CORS_ORIGINS: list[str] = ["http://localhost:3000"]

    class Config:
        env_file = ".env"


settings = Settings()
