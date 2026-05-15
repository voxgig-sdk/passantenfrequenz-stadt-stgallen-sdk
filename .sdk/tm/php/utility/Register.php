<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

PassantenfrequenzStadtStgallenUtility::setRegistrar(function (PassantenfrequenzStadtStgallenUtility $u): void {
    $u->clean = [PassantenfrequenzStadtStgallenClean::class, 'call'];
    $u->done = [PassantenfrequenzStadtStgallenDone::class, 'call'];
    $u->make_error = [PassantenfrequenzStadtStgallenMakeError::class, 'call'];
    $u->feature_add = [PassantenfrequenzStadtStgallenFeatureAdd::class, 'call'];
    $u->feature_hook = [PassantenfrequenzStadtStgallenFeatureHook::class, 'call'];
    $u->feature_init = [PassantenfrequenzStadtStgallenFeatureInit::class, 'call'];
    $u->fetcher = [PassantenfrequenzStadtStgallenFetcher::class, 'call'];
    $u->make_fetch_def = [PassantenfrequenzStadtStgallenMakeFetchDef::class, 'call'];
    $u->make_context = [PassantenfrequenzStadtStgallenMakeContext::class, 'call'];
    $u->make_options = [PassantenfrequenzStadtStgallenMakeOptions::class, 'call'];
    $u->make_request = [PassantenfrequenzStadtStgallenMakeRequest::class, 'call'];
    $u->make_response = [PassantenfrequenzStadtStgallenMakeResponse::class, 'call'];
    $u->make_result = [PassantenfrequenzStadtStgallenMakeResult::class, 'call'];
    $u->make_point = [PassantenfrequenzStadtStgallenMakePoint::class, 'call'];
    $u->make_spec = [PassantenfrequenzStadtStgallenMakeSpec::class, 'call'];
    $u->make_url = [PassantenfrequenzStadtStgallenMakeUrl::class, 'call'];
    $u->param = [PassantenfrequenzStadtStgallenParam::class, 'call'];
    $u->prepare_auth = [PassantenfrequenzStadtStgallenPrepareAuth::class, 'call'];
    $u->prepare_body = [PassantenfrequenzStadtStgallenPrepareBody::class, 'call'];
    $u->prepare_headers = [PassantenfrequenzStadtStgallenPrepareHeaders::class, 'call'];
    $u->prepare_method = [PassantenfrequenzStadtStgallenPrepareMethod::class, 'call'];
    $u->prepare_params = [PassantenfrequenzStadtStgallenPrepareParams::class, 'call'];
    $u->prepare_path = [PassantenfrequenzStadtStgallenPreparePath::class, 'call'];
    $u->prepare_query = [PassantenfrequenzStadtStgallenPrepareQuery::class, 'call'];
    $u->result_basic = [PassantenfrequenzStadtStgallenResultBasic::class, 'call'];
    $u->result_body = [PassantenfrequenzStadtStgallenResultBody::class, 'call'];
    $u->result_headers = [PassantenfrequenzStadtStgallenResultHeaders::class, 'call'];
    $u->transform_request = [PassantenfrequenzStadtStgallenTransformRequest::class, 'call'];
    $u->transform_response = [PassantenfrequenzStadtStgallenTransformResponse::class, 'call'];
});
