package core

type PassantenfrequenzStadtStgallenError struct {
	IsPassantenfrequenzStadtStgallenError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewPassantenfrequenzStadtStgallenError(code string, msg string, ctx *Context) *PassantenfrequenzStadtStgallenError {
	return &PassantenfrequenzStadtStgallenError{
		IsPassantenfrequenzStadtStgallenError: true,
		Sdk:              "PassantenfrequenzStadtStgallen",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *PassantenfrequenzStadtStgallenError) Error() string {
	return e.Msg
}
