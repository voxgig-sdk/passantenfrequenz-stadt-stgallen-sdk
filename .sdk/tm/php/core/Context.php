<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK context

require_once __DIR__ . '/Control.php';
require_once __DIR__ . '/Operation.php';
require_once __DIR__ . '/Spec.php';
require_once __DIR__ . '/Result.php';
require_once __DIR__ . '/Response.php';
require_once __DIR__ . '/Error.php';
require_once __DIR__ . '/Helpers.php';

class PassantenfrequenzStadtStgallenContext
{
    public string $id;
    public array $out;
    public mixed $client;
    public ?PassantenfrequenzStadtStgallenUtility $utility;
    public PassantenfrequenzStadtStgallenControl $ctrl;
    public array $meta;
    public ?array $config;
    public ?array $entopts;
    public ?array $options;
    public mixed $entity;
    public ?array $shared;
    public array $opmap;
    public array $data;
    public array $reqdata;
    public array $match;
    public array $reqmatch;
    public ?array $point;
    public ?PassantenfrequenzStadtStgallenSpec $spec;
    public ?PassantenfrequenzStadtStgallenResult $result;
    public ?PassantenfrequenzStadtStgallenResponse $response;
    public PassantenfrequenzStadtStgallenOperation $op;

    public function __construct(array $ctxmap = [], ?self $basectx = null)
    {
        $this->id = 'C' . random_int(10000000, 99999999);
        $this->out = [];

        $this->client = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'client') ?? ($basectx ? $basectx->client : null);
        $this->utility = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'utility') ?? ($basectx ? $basectx->utility : null);

        $this->ctrl = new PassantenfrequenzStadtStgallenControl();
        $ctrl_raw = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'ctrl');
        if (is_array($ctrl_raw)) {
            if (array_key_exists('throw', $ctrl_raw)) {
                $this->ctrl->throw_err = $ctrl_raw['throw'];
            }
            if (isset($ctrl_raw['explain']) && is_array($ctrl_raw['explain'])) {
                $this->ctrl->explain = $ctrl_raw['explain'];
            }
        } elseif ($basectx !== null && $basectx->ctrl !== null) {
            $this->ctrl = $basectx->ctrl;
        }

        $m = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'meta');
        $this->meta = is_array($m) ? $m : ($basectx ? $basectx->meta ?? [] : []);

        $cfg = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'config');
        $this->config = is_array($cfg) ? $cfg : ($basectx ? $basectx->config : null);

        $eo = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'entopts');
        $this->entopts = is_array($eo) ? $eo : ($basectx ? $basectx->entopts : null);

        $o = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'options');
        $this->options = is_array($o) ? $o : ($basectx ? $basectx->options : null);

        $e = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'entity');
        $this->entity = $e ?? ($basectx ? $basectx->entity : null);

        $s = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'shared');
        $this->shared = is_array($s) ? $s : ($basectx ? $basectx->shared : null);

        $om = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'opmap');
        $this->opmap = is_array($om) ? $om : ($basectx ? $basectx->opmap ?? [] : []);

        $this->data = PassantenfrequenzStadtStgallenHelpers::to_map(PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'data')) ?? [];
        $this->reqdata = PassantenfrequenzStadtStgallenHelpers::to_map(PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'reqdata')) ?? [];
        $this->match = PassantenfrequenzStadtStgallenHelpers::to_map(PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'match')) ?? [];
        $this->reqmatch = PassantenfrequenzStadtStgallenHelpers::to_map(PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'reqmatch')) ?? [];

        $pt = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'point');
        $this->point = is_array($pt) ? $pt : ($basectx ? $basectx->point : null);

        $sp = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'spec');
        $this->spec = ($sp instanceof PassantenfrequenzStadtStgallenSpec) ? $sp : ($basectx ? $basectx->spec : null);

        $r = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'result');
        $this->result = ($r instanceof PassantenfrequenzStadtStgallenResult) ? $r : ($basectx ? $basectx->result : null);

        $rp = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'response');
        $this->response = ($rp instanceof PassantenfrequenzStadtStgallenResponse) ? $rp : ($basectx ? $basectx->response : null);

        $opname = PassantenfrequenzStadtStgallenHelpers::get_ctx_prop($ctxmap, 'opname') ?? '';
        $this->op = $this->resolve_op($opname);
    }

    public function resolve_op(string $opname): PassantenfrequenzStadtStgallenOperation
    {
        // Cache key is `<entity>:<opname>` so two entities with the same op
        // (e.g. both have a "list") get distinct cached Operations. Keying
        // on opname alone caused the first-resolved entity's points to be
        // served to every subsequent entity's call.
        $entname = (is_object($this->entity) && method_exists($this->entity, 'get_name'))
            ? $this->entity->get_name()
            : '_';
        $cacheKey = $entname . ':' . $opname;

        if (isset($this->opmap[$cacheKey])) {
            return $this->opmap[$cacheKey];
        }
        if ($opname === '') {
            return new PassantenfrequenzStadtStgallenOperation([]);
        }

        $opcfg = \Voxgig\Struct\Struct::getpath($this->config, "entity.{$entname}.op.{$opname}");

        $input = ($opname === 'update' || $opname === 'create') ? 'data' : 'match';

        $points = [];
        if (is_array($opcfg)) {
            $t = \Voxgig\Struct\Struct::getprop($opcfg, 'points');
            if (is_array($t)) {
                $points = $t;
            }
        }

        $op = new PassantenfrequenzStadtStgallenOperation([
            'entity' => $entname,
            'name' => $opname,
            'input' => $input,
            'points' => $points,
        ]);
        $this->opmap[$cacheKey] = $op;
        return $op;
    }

    public function make_error(string $code, string $msg): PassantenfrequenzStadtStgallenError
    {
        return new PassantenfrequenzStadtStgallenError($code, $msg, $this);
    }
}
