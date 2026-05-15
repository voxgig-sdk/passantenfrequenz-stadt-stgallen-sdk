<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK base feature

class PassantenfrequenzStadtStgallenBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(PassantenfrequenzStadtStgallenContext $ctx, array $options): void {}
    public function PostConstruct(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function PostConstructEntity(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function SetData(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function GetData(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function GetMatch(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function SetMatch(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function PrePoint(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function PreSpec(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function PreRequest(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function PreResponse(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function PreResult(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function PreDone(PassantenfrequenzStadtStgallenContext $ctx): void {}
    public function PreUnexpected(PassantenfrequenzStadtStgallenContext $ctx): void {}
}
